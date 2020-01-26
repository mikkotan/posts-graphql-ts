# Posts API using GraphQL and Typescript
### Getting Started
Make sure to have atleast docker-compose ready on your machine. If not download [here](https://docs.docker.com/get-started/) and setup your docker .

Clone the repo
```
$ git clone git@github.com:michaelunltd/posts-graphql-ts.git && cd posts-graphql-ts
```

Install dependencies
```
$ yarn install
```

Run MongoDB container
```
$ docker-compose up -d
```

Setup env files
```
$ mv .env.sample .env
```

Start the server
```
$ yarn start
```

Play with GraphQL Playground
```
http://localhost:5000/graphql
```
