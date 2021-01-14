import { ApolloServer } from 'apollo-server';
import { mergeTypeDefs, mergeResolvers } from 'graphql-tools';
import { environment } from './environment';
import userResolver from './graphQL/resolvers/user.resolver';
import userType from './graphQL/types/user-type';
import commonTypes from './graphQL/types/common.type';
// import { makeExecutableSchema } from 'graphql-tools';
// const { constraintDirective, constraintDirectiveTypeDefs } = require('graphql-constraint-directive');

const types = [userType, commonTypes]
const allResolvers = [userResolver]

const resolvers = mergeResolvers(allResolvers);
const typeDefs = mergeTypeDefs(types);

const server = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
});

server.listen(environment.port)
  .then(({ url }) => console.log(`Server ready at ${url}. `));

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}