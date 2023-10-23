# Spring Boot Application Dockerization

This repository contains a Dockerfile to help you containerize a Spring Boot application using an official OpenJDK 8 image.

## Prerequisites

#### [Docker](https://www.docker.com/get-started) must be installed on your system.

## Build and Run the Docker Image

#### 1. Clone this repository to your local machine
```bash
git clone https://gitlab.com/azizwaadoud7/coding-challenge.git
````

#### 2. Navigate to the directory containing the Dockerfile
```bash
cd <repository-directory>
```

#### 3. Build the Docker image:

```bash
docker build -t <your-image-name> .
```

#### 4. Running the Docker Container:
```bash
docker run -p <port>:<port> .
```

#### 5. Accessing Your Application : 
```bash
http://localhost:<port>
```

