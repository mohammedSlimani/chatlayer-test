# echo-chatbot

> Parrot, repeats what you say

## About

This project uses [Feathers](http://feathersjs.com) for the backend and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### With `docker-compose`
1. Make sure you have [docker and docker-compose](https://docs.docker.com/compose/install/) installed.
2. You can run the backend and frontend simply by one command:
    ```
    docker-compose up
    ```

You should be able to have access to the frontend at `http://localhost:3001`

### Without docker

#### Start the backend
1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/echo-chatbot
    npm install
    ```

3. Start your app

    ```
    npm start
    ```

#### Start the frontEnd
1. Install dependencies
    ```
    cd path/to/echo-chatbot/client
    npm install
    ```
2. Start the front end
    ```
    npm start
    ```

## Testing
Only available for the backend service.
### Inside docker container
1. Make sure you have stopped the backend container
    ```
    docker-compose down
    ```
2. Run the backend container independently
    ```
    docker-compose run --entrypoint /bin/bash backend
    ```
3. Inside the container run the tests with the command:
    ```
    npm test
    ```

### Outside the docker container
1. Make sure that you have installed all the dependencies
2. Simply run `npm test` and all your tests in the `test/` directory will be run.
