FROM node:15-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 9001

CMD [ "node", "productservice.js" ]