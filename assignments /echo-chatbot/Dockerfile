FROM node:14

WORKDIR /home/app
ENV PORT 3001
EXPOSE 3001

# copy the source code from the host system's working directory
# COPY package*.json ./
COPY . .

# install node_modules
# following assumes the source code repo contains a package.json file!
RUN npm install

# changing ownership of the app directory to the node user and group
RUN chown -R node:node /home/app

# set a user with non-root privileges to increase security!
USER node

# running the container opens a shell
ENTRYPOINT npm start
