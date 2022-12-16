const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');
const path = require('path');

const typesArray = loadFilesSync(path.join(__dirname, '../src/models/*/*.graphql'), { recursive: true });
const allTypeDefs = mergeTypeDefs(typesArray);

const resolversArray = loadFilesSync(path.join(__dirname, '../src/models/*/*.ts'), { recursive: true });
const allResolvers = mergeResolvers(resolversArray);

module.exports = {
  typeDefs: allTypeDefs,
  resolvers: allResolvers
};
