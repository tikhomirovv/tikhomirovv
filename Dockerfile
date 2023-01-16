FROM node:16.1-alpine3.13 AS build

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# install project dependencies leaving out dev dependencies
RUN npm i

# build app for production with minification
RUN npm run build

# Run-time stage
FROM node:16.1-alpine3.13

# make the 'app' folder the current working directory
WORKDIR /app

COPY --from=build dist ./dist

# install simple http server for serving static content
RUN npm install -g http-server

EXPOSE 8080
CMD [ "http-server",  "-P", "http://localhost:8080/?", "dist" ]