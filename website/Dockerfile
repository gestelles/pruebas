FROM node:9.1

RUN \
    apt-get update && \
    apt-get install -y nginx vim

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# install packages and dependencies
RUN npm install

# Bundle app source
#USER docker
COPY . .

# builds the app (devELOPER | proDUCTION)
RUN npm run dev

# make the 'app' folder the current working directory
WORKDIR /var/www/html

# clean up (i.e. extract 'dist' folder and remove everything else)
RUN \
    rm * && \
    mv /app/bin/* . && \ 
    rm -fr /app

EXPOSE 80

#CMD "npm run dev"
CMD ["nginx", "-g", "daemon off;"]