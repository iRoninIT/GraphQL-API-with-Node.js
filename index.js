import hapi from 'hapi';
import schema from './graphql/schema';
import { graphqlHapi, graphiqlHapi } from 'apollo-server-hapi';

const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: '3200'
});

server.register({
  register: graphqlHapi,
  options: {
    path: '/graphql',
    graphqlOptions: { schema },
    route: {
      cors: true
    }
  }
});

server.register({
  register: graphiqlHapi,
  options: {
    path: '/graphiql',
    graphiqlOptions: {
      endpointURL: '/graphql'
    }
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});
