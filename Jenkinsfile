pipeline {
    agent any

    environment {
        SSH_USER    = "deploy"
        SSH_HOST    = "52.66.198.140"
        DEPLOY_DIR  = "/home/deploy/apps/jananayagan/source"
        PM2_NAME    = "frontend"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/production']],
                    userRemoteConfigs: [[url: 'https://github.com/sugimx/jananayagan.git']]
                ])
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                rm -rf node_modules .next
                npm install --legacy-peer-deps
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                npm run build
                '''
            }
        }

        stage('Upload to Server') {
            steps {
                sh '''
                ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST "mkdir -p $DEPLOY_DIR"
                rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" ./ $SSH_USER@$SSH_HOST:$DEPLOY_DIR/
                '''
            }
        }

        stage('Restart PM2') {
            steps {
                sh '''
                ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST "
                    cd $DEPLOY_DIR &&
                    npm install --legacy-peer-deps &&
                    pm2 delete $PM2_NAME || true &&
                    pm2 start 'npm start' --name $PM2_NAME &&
                    pm2 save
                "
                '''
            }
        }

        stage('Health Check') {
            steps {
                script {
                    def status = sh(
                        script: "curl -s -o /dev/null -w \"%{http_code}\" https://tvkcup2026.com",
                        returnStdout: true
                    ).trim()

                    if (status != "200") {
                        error "❌ Deployment failed: App is not returning HTTP 200 (got ${status})"
                    }
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful."
        }
        failure {
            echo "❌ Deployment failed. Check logs."
        }
    }
}
