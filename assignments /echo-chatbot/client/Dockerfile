FROM node:14

WORKDIR /home/app
ENV PORT 3000
EXPOSE 3000

# copy the source code from the host system's working directory
# COPY package*.json ./
COPY . .

# install node_modules
# following assumes the source code repo contains a package.json file!
RUN npm install

RUN mkdir -p build

RUN chown -R node:node /home/app/build

RUN npm run build

# set a user with non-root privileges to increase security!
USER node

# running the container opens a shell
ENTRYPOINT npx serve -s build -l 3000
