FROM node

WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet
RUN npm install pm2@latest -g

COPY . .
