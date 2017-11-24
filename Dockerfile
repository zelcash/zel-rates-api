FROM node:8.9.1

WORKDIR /usr/local/src

COPY package.json .
RUN npm install

ADD . /usr/local/src

EXPOSE 3333
USER node

ENTRYPOINT ["node", "index.js"]
