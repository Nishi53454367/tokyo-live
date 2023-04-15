FROM node:18.16.0
WORKDIR /app
RUN apk update && \
    npm install -g create-next-app