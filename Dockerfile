FROM node:16.1-alpine3.13

# make the 'app' folder the current working directory
WORKDIR /app

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# install simple http server for serving static content
RUN npm install -g http-server

EXPOSE 8080
CMD [ "http-server",  "-P", "http://localhost:8080/?" ]
