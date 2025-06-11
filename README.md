# Docker Projects Collection

This repository contains 5 Docker projects built with different technologies. Each project is designed to learn and practice Docker containerization concepts.

## 📁 Project Structure

```
docker-projects/
├── 1-ubuntu-node-simple-app/
├── 2-node-app/
├── 3-node-server/
├── 4-php-app/
├── 5-node-mongo-todo/
├── 6-python-app/
└── README.md
```

## 🚀 Projects

### 1. Ubuntu Node Simple App
**Directory:** `1-ubuntu-node-simple-app/`

A simple Node.js application based on Ubuntu 18.04. When the container runs, it automatically prints a message to the console.

**Files:**
- `Dockerfile`: Instructions to build the Docker image
- `index.js`: Simple Node.js script
- `README.md`: Project description

**Usage:**
```bash
# Build the image
docker build . -t ubuntu-node-simple-app

# Run the container
docker run --rm ubuntu-node-simple-app
```

**Expected output:**
```
Node.js app from Ubuntu 18.04 Docker container!
```

---

### 2. Node App
**Directory:** `2-node-app/`

Docker configuration for a simple Node.js application.

**Usage:**
```bash
# Build the image
docker build . -t simple-node-app

# Run the container
docker run simple-node-app

# For updates:
docker build . -t node-app
docker run node-app
```

---

### 3. Node Server (Express)
**Directory:** `3-node-server/`

Express.js-based web server. Accessible from the host system via port mapping.

**Files:**
- `app.js`: Express server code
- `Dockerfile`: Docker image configuration
- `package.json`: Node.js dependencies
- `.dockerignore`: Excludes node_modules

**Usage:**
```bash
# For development (local)
npm install
node app.js

# With Docker
docker build -t node-server .
docker run -p 3000:3000 node-server
```

**Test:**
Navigate to `http://localhost:3000` in your browser.

**Dockerfile content:**
```dockerfile
FROM node:24-slim
WORKDIR /opt/node-server
COPY . .
RUN npm install
CMD ["node", "app.js"]
```

**Sample app.js:**
```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello! Express server is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
```

---

### 4. PHP App
**Directory:** `4-php-app/`

Simple PHP application using Apache and PHP 7.

**Files:**
- `index.php`: Basic PHP file
- `Dockerfile`: PHP 7 + Apache configuration

**Usage:**
```bash
# Build the image
docker build . -t php-app

# Run the container
docker run -p 8080:80 php-app
```

**Test:**
Navigate to `http://localhost:8080/index.php` in your browser.

**Expected output:**
```
PHP Application Dockerized... | kablosuzkedi
```

---

### 5. Node MongoDB Todo App
**Directory:** `5-node-mongo-todo/`

Todo application integrated with MongoDB. Uses Express.js and Mongoose.

**Features:**
- Add, list, update, delete todos
- MongoDB connection
- RESTful API endpoints

**API Endpoints:**
- `GET /todos` - List all todos
- `POST /todos` - Create new todo
- `PUT /todos/:id` - Toggle todo status
- `DELETE /todos/:id` - Delete todo

**Dockerfile:**
```dockerfile
FROM node:24-slim
WORKDIR /opt/node-todo-app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=4000
EXPOSE 4000
CMD ["node", "app.js"]
```

**Usage:**
```bash
# Build the image
docker build . -t node-mongo-todo

# Run the container (MongoDB required)
docker run -p 4000:4000 node-mongo-todo
```

**Note:** This project requires MongoDB connection. Docker Compose is recommended for production environment.

**Sample API Usage:**
```bash
# Get all todos
curl http://localhost:4000/todos

# Create a new todo
curl -X POST http://localhost:4000/todos \
  -H "Content-Type: application/json" \
  -d '{"task": "Learn Docker"}'

# Update todo (toggle completion)
curl -X PUT http://localhost:4000/todos/[todo-id]

# Delete todo
curl -X DELETE http://localhost:4000/todos/[todo-id]
```
# 6-Python Flask App

Basit Flask uygulaması Docker ile container içinde çalışır.

## Dosyalar

- `app.py` — Flask uygulaması  
- `requirements.txt` — Bağımlılıklar  
- `Dockerfile` — Docker yapılandırması

## Docker ile Çalıştırma

```bash
docker build -t python-app .
docker run -p 3000:5000 python-app
## 🛠️ General Requirements

- [Docker](https://docs.docker.com/get-docker/) must be installed
- Each project should be run in its own directory
Merhaba, Flask!

## 📝 Docker Commands Summary

```bash
# Build an image
docker build . -t <image-name>

# Run a container
docker run <image-name>

# Run with port mapping
docker run -p <host-port>:<container-port> <image-name>

# Run in background
docker run -d <image-name>

# Run with auto-removal
docker run --rm <image-name>

# List running containers
docker ps

# List all containers
docker ps -a

# Stop a container
docker stop <container-id>

# Remove a container
docker rm <container-id>

# List images
docker images

# Remove an image
docker rmi <image-name>
```

## 🎯 Learning Objectives

With these projects, you can learn:
- Docker image creation
- Using different base images
- Port mapping
- Environment variables usage
- Multi-stage builds
- .dockerignore usage
- Container networking
- Database integration with containers

## 🔧 Technology Stack

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **PHP**: Server-side scripting
- **Apache**: Web server
- **Docker**: Containerization platform

## 📚 Additional Resources

- [Docker Official Documentation](https://docs.docker.com/)
- [Node.js Docker Best Practices](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [Docker Compose for Multi-Container Apps](https://docs.docker.com/compose/)

