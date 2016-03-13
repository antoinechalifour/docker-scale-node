FROM node:wheezy

MAINTAINER Antoine Chalifour <antoine.chalifour@formetris.com>

RUN mkdir -p /usr/src/app
COPY www /usr/src/app
WORKDIR /usr/src/app

RUN npm install

EXPOSE 80

CMD npm start