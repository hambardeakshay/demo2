FROM node
WORKDIR /app
COPY package.json /app
RUN install npm
COPY  . /app
CMD node server.js
EXPOSE 4000




