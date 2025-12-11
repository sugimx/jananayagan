pipeline {
  agent any

  environment {
    SSH_USER = "deploy"
    SSH_HOST = "15.207.229.24"         // CHANGE if new IP
    APP_HOME = "/home/deploy/apps/jananayagan"
    CURRENT  = "${APP_HOME}/current"
    PM2_NAME = "frontend"
    KEEP_RELEASES = "3"
  }

  options {
    timeout(time: 30, unit: 'MINUTES')
    ansiColor('xterm')
  }

  stages {
    stage('Checkout') {
      steps {
        echo "Checkout production branch..."
        git branch: 'production', url: 'https://github.com/sugimx/jananayagan.git'
      }
    }

    stage('Build') {
      steps {
        echo "Install & build..."
        sh '''
          rm -rf node_modules .next
          npm ci --legacy-peer-deps || npm install --legacy-peer-deps
          npm run build
        '''
      }
    }

    stage('Package') {
      steps {
        script { env.RELEASE = "release-${env.BUILD_ID}-${env.BUILD_NUMBER}" }
        sh '''
          mkdir -p ${RELEASE}
          cp -R .next node_modules public package.json ${RELEASE}/
          tar -czf ${RELEASE}.tar.gz ${RELEASE}
          echo ${RELEASE} > release-name.txt
        '''
        stash includes: '*.tar.gz,release-name.txt', name: 'artifact'
      }
    }

    stage('Upload (with retry)') {
      steps {
        retry(2) {
          sshagent (credentials: ['deploy-key']) {
            unstash 'artifact'
            sh '''
              RELEASE=$(cat release-name.txt)
              ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10 ${SSH_USER}@${SSH_HOST} "mkdir -p ${APP_HOME}/releases"
              rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10" ${RELEASE}.tar.gz ${SSH_USER}@${SSH_HOST}:${APP_HOME}/releases/
            '''
          }
        }
      }
    }

    stage('Activate & Install on Server') {
      steps {
        sshagent (credentials: ['deploy-key']) {
          sh '''
            RELEASE=$(cat release-name.txt)
            ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} "
              set -e
              cd ${APP_HOME}/releases
              tar -xzf ${RELEASE}.tar.gz
              ln -sfn ${APP_HOME}/releases/${RELEASE} ${CURRENT}
              cd ${CURRENT}
              npm ci --legacy-peer-deps || npm install --legacy-peer-deps
              pm2 delete ${PM2_NAME} || true
              pm2 start 'npm start' --name ${PM2_NAME}
              pm2 save
            "
          '''
        }
      }
    }

    stage('Health Check') {
      steps {
        script {
          echo "Waiting for app and checking health..."
          sleep 5
          def code = sh(script: "curl -s -o /dev/null -w '%{http_code}' https://tvkcup2026.com || true", returnStdout: true).trim()
          if (code != '200') {
            error "Health check failed (HTTP ${code})"
          }
        }
      }
    }
  }

  post {
    success {
      echo "Deployment successful."
      sshagent (credentials: ['deploy-key']) {
        sh '''
          ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} "
            cd ${APP_HOME}/releases || exit 0
            ls -1tr | head -n -${KEEP_RELEASES} | xargs -r -I{} rm -rf {}
          "
        '''
      }
    }
    failure {
      echo "Deployment failed — attempting simple rollback to previous release."
      sshagent (credentials: ['deploy-key']) {
        sh '''
          ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} "
            set -e || true
            cd ${APP_HOME}
            PREV=$(ls -1 releases | grep -v '^$' | tail -n 2 | head -n1 || true)
            if [ -n \"$PREV\" ]; then
              ln -sfn releases/$PREV current
              cd current
              pm2 delete ${PM2_NAME} || true
              pm2 start 'npm start' --name ${PM2_NAME} || true
              pm2 save || true
            fi
          "
        '''
      }
    }
  }
}
