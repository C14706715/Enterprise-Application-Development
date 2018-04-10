var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};


const addUser = (user) => (
  knex('users')
  .returning('id') // returns [id]
  .insert({
    username: user.username,
    password: yourPasswordHashFunction(user.password),
    created: Math.floor(Date.now() / 1000), // Unix time in seconds
  })
  .then((id) => (getUser(id[0])))
  .catch((error) => (
    console.log(error)
  ))
);




var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');