# Dashboard

This project is intended to show metrics and provide simplest instrumentation of the games 

## Important notice

Use this project from develop branch and child branch from develop also.

## Using through Docker

This project includes a docker for its execution, once on this project you only have to: 

``` docker build . ```

If the execution has run correctly we can tag this machine as: 

``` docker tag ${{hash}} tangelogamesbarcelona/dashboard ```

To run the project, then simply: 

``` docker run -itd -p 8080:8080 -v ${LOCAL_PROJECT_PATH}:/var/www/html/dashboard tangelogamesbarcelona/dashboard```

To see if everything is working properly, try in your browser: 

``` http://localhost:8080```

## Build Setup of project

Please do all of this from inside the docker machine, to get into the docker , once is running, do: 

``` docker ps ``` to choose the docker name 
 
Then: 

``` docker exec -it ${DOCKER_NAME} /bin/bash ```


``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
