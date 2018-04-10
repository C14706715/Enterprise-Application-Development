const graphql = require('graphql')

const Todo = require('../../models/todo')
const fakeDatabase = {};
// fill the fakeDatabase with some todos
(function() {
  const todos = ["Buy some beer", "Buy some pizza", "Learn GraphQL"];
  todos.map(todo => {
    const newTodo = new Todo(todo);
    fakeDatabase[newTodo.id] = newTodo
  });
})()

// define the queries of the graphql Schema
const query = new graphql.GraphQLObjectType({
  name: 'TodoQuery',
  fields: {
    todo: {
      type: new graphql.GraphQLList(TodoType),
      args: {
        id: {
          type: graphql.GraphQLInt
        }
      },
      resolve: (_, {id}) => {
        if (id)
          return [fakeDatabase[id]];
        return Object.values(fakeDatabase);
      }
    }
  }
})

// creates and exports the GraphQL Schema
module.exports = new graphql.GraphQLSchema({
  query
})