FROM node:24-slim

WORKDIR /opt/node-todo-app

COPY package*.json ./

RUN npm install

COPY . .
ENV PORT=4000
EXPOSE 4000

CMD ["node", "app.js"]
