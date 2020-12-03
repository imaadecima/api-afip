import Afip from '@afipsdk/afip.js'
import { GraphQLServer } from 'graphql-yoga'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'

const afip = new Afip({ CUIT: 20373365808 })

//Resolver
const resolvers = {
  Query,
  Mutation,
}

const context = {
  afip
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      ...context
    }
  }
})

server.start(() => console.log('Server is running'))
