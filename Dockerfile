FROM ubuntu:16.04

RUN apt-get update
RUN apt-get install -y curl wget git
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

COPY . /usr/src/coreui-vue
WORKDIR /usr/src/coreui-vue
RUN npm install -g npm@5.6.0 vue-cli
RUN npm install

EXPOSE 8080
CMD npm run serve
