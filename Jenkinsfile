// pipeline {
//     agent any
//     stages {
//         stage('Build') {
//             steps {
//                 echo 'Building...'
//             }
//         }
//         stage('Test') {
//             steps {
//                 echo 'Testing...'
//             }
//         }
//         stage('Deploy') {
//             steps {
//                 echo 'Deploying...'
//             }
//         }
//     }
// }


pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Frontend Docker Image') {
            steps {
                script {
                    dir('react-frontend') {
                        sh 'docker build -t react-frontend .'
                    }
                }
            }
        }
        stage('Build Backend Docker Image') {
            steps {
                script {
                    dir('springboot-backend') {
                        sh 'docker build -t springboot-backend .'
                    }
                }
            }
        }
        stage('Push Images to Registry') {
            steps {
                script {
                    // Example using Docker Hub; adjust for your registry
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials-id') {
                        sh 'docker tag react-frontend shub9446/react-frontend:latest'
                        sh 'docker tag springboot-backend shub9446/springboot-backend:latest'
                        sh 'docker push shub9446/react-frontend:latest'
                        sh 'docker push shub9446/springboot-backend:latest'
                    }
                }
            }
        }
    }
}
