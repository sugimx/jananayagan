pipeline {
    agent any

    environment {
        SSH_USER    = "deploy"
        SSH_HOST    = "13.126.91.50"
        DEPLOY_PATH = "/home/deploy/apps/jananayagan"
        PM2_NAME    = "jananayagan-frontend"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh "npm ci"
            }
        }

        stage('Build') {
            steps {
                sh "npm run build"
            }
        }

        stage('Package') {
            steps {
                sh """
                    rm -rf artifact
                    mkdir -p artifact
                    cp -R .next artifact/
                    cp -R public artifact/
                    cp package.json artifact/
                """
            }
        }

        stage('Deploy') {
            steps {
                sh """
                    # Upload build artifacts to server
                    scp -r artifact/* deploy@13.126.91.50:/home/deploy/apps/jananayagan/build
                    # Remote deployment script
                    ssh ${SSH_USER}@${SSH_HOST} '
                        cd ${DEPLOY_PATH};

                        # Backup previous version only if current exists
                        if [ -d current ]; then
                            rm -rf previous;
                            mv current previous;
                        fi

                        # Promote build to current
                        mv build current;

                        # Restart PM2 cleanly
                        pm2 delete ${PM2_NAME} || true;
                        cd current;
                        pm2 start npm --name ${PM2_NAME} -- start;
                        pm2 save;
                    '
                """
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
