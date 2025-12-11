pipeline {
    agent any

    environment {
        SSH_USER    = "deploy"
        SSH_HOST    = "13.126.91.50"
        APP_HOME    = "/home/deploy/apps/jananayagan"
        CURRENT     = "/home/deploy/apps/jananayagan/current"
        PM2_NAME    = "frontend"
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo "Fetching latest code from production branch..."
                git branch: 'production', url: 'https://github.com/sugimx/jananayagan.git'
            }
        }

        stage('Install Dependencies & Build') {
            steps {
                echo "Installing npm packages & building application..."

                sh '''
                rm -rf node_modules .next
                npm install --legacy-peer-deps
                npm run build
                '''
            }
        }

        stage('Prepare Release') {
            steps {
                script {
                    env.RELEASE_NAME = "release-${env.BUILD_ID}"
                }

                sh '''
                mkdir -p ${RELEASE_NAME}
                cp -R .next node_modules public package.json ${RELEASE_NAME}/
                tar -czf ${RELEASE_NAME}.tar.gz ${RELEASE_NAME}
                echo "${RELEASE_NAME}" > release-name.txt
                '''
                stash includes: '*.tar.gz, release-name.txt', name: 'artifact'
            }
        }

        stage('Upload to Server') {
            steps {
                sshagent (credentials: ['deploy-key']) {

                    unstash 'artifact'

                    sh '''
                    RELEASE_NAME=$(cat release-name.txt)

                    ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} "mkdir -p ${APP_HOME}/releases"

                    rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" ${RELEASE_NAME}.tar.gz \
                        ${SSH_USER}@${SSH_HOST}:${APP_HOME}/releases/
                    '''
                }
            }
        }

        stage('Extract & Activate Release') {
            steps {
                sshagent (credentials: ['deploy-key']) {
                    sh '''
                    RELEASE_NAME=$(cat release-name.txt)

                    ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} "
                        cd ${APP_HOME}/releases &&
                        tar -xzf ${RELEASE_NAME}.tar.gz &&
                        rm -f ${CURRENT} &&
                        ln -s ${APP_HOME}/releases/${RELEASE_NAME} ${CURRENT}
                    "
                    '''
                }
            }
        }

        stage('Restart PM2') {
            steps {
                sshagent (credentials: ['deploy-key']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} "
                        cd ${CURRENT} &&
                        npm install --legacy-peer-deps &&
                        pm2 delete ${PM2_NAME} || true &&
                        pm2 start 'npm start' --name ${PM2_NAME} &&
                        pm2 save
                    "
                    '''
                }
            }
        }

        stage('Health Check') {
            steps {
                script {
                    echo "Performing health check..."

                    def status = sh(
                        script: "curl -s -o /dev/null -w \"%{http_code}\" https://tvkcup2026.com",
                        returnStdout: true
                    ).trim()

                    if (status != "200") {
                        error("❌ Health check failed: Expected 200, got ${status}")
                    }
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployment completed successfully."
        }
        failure {
            echo "❌ Deployment failed. Check logs."
        }
    }
}
