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
            cp package.json package-lock.json artifact/
        """
    }
}


        stage('Deploy') {
            steps {
                sh """
                    # Prepare deploy directory
                    ssh ${SSH_USER}@${SSH_HOST} "rm -rf ${DEPLOY_PATH}/build && mkdir -p ${DEPLOY_PATH}/build"

                    # Upload artifacts including .next
                    scp -r artifact/. ${SSH_USER}@${SSH_HOST}:${DEPLOY_PATH}/build

                    # Server-side deployment steps
                    ssh ${SSH_USER}@${SSH_HOST} '
                        cd ${DEPLOY_PATH};

                        if [ -d current ]; then
                            rm -rf previous;
                            mv current previous;
                        fi

                        mv build current;

                        cd current;

                        # Install production dependencies on server
                        npm install --omit=dev

                        # Restart PM2 cleanly
                        pm2 delete ${PM2_NAME} || true;
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
