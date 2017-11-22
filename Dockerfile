FROM node:9.2.0

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

WORKDIR /var/app/swishRollbar/
VOLUME /var/app/swishRollbar/
COPY package.json /var/app/swishRollbar/
RUN npm install
COPY / /var/app/swishRollbar/
EXPOSE 3000 3000
CMD [ "npm" , "start" ]
