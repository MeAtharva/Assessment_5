FROM node:9-slim
WORKDIR /usr/src/app
COPY package.json ./app
RUN npm install
COPY . .
CMD ["node", "app.js"]