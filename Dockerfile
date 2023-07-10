FROM node
WORKDIR /src
COPY  . .
EXPOSE 5050
CMD node server.js