import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro';
require('dotenv').config();
const postgres = require('postgres');
const sql = postgres();

const typeDefs = gql`
    type Mutation {
    updateStock(): [stock] 
  }
`;

async function getStock() {
  const result = await sql`select stock from products`;
  return result[0];
}

async function updateStock() {
  const result = await sql`Update products SET stock = ${
    getStock - 1
  } where id = ${id}`;
  return result[0];
}

// async function getFilteredTodos(checked) {
//   return await sql`select * from todos WHERE checked = ${checked}`;
// }

// async function getTodo(id) {
//   const result = await sql`select * from todos WHERE id = ${id}`;
//   return result[0];
// }

// async function createTodo(title, checked) {
//   const result = await sql`INSERT INTO todos (title, checked)
//   VALUES (${title}, ${checked}) RETURNING id, title, checked;`;
//   return result[0];
// }

const resolvers = {
  Mutation: {
    updateStock: async (parent, args) => {
      return await updateStock(args.title, false);
    },
  },
  // Query, Subscription, Mutation
  // Boolean, String, Int, Float
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });

export default new ApolloServer({ schema }).createHandler({
  path: '/api/graphql',
});

export const config = {
  api: {
    bodyParser: false,
  },
};
