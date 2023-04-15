FROM node:lts-alpine
WORKDIR /app
RUN apk update && \
    npm install -g create-next-app