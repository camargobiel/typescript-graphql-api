const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require("@apollo/server/standalone");
const { typeDefs, resolvers } = require('./merge');

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.API_PORT }
  });

  console.log(`server is listening in url ${url}`);
};

startServer();

