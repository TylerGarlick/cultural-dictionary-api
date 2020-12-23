import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { DictionaryResolver } from './dictionaries'
import { GraphQLSchema } from 'graphql'
import { initialize } from './infrastructue/schemas/initialize'

export interface SetupServerOptions {
  playground?: boolean
  debug?: boolean
  introspection?: boolean,
  tracing?: boolean
}

export const setupServer = (schema: GraphQLSchema, options: SetupServerOptions = {
  debug: true,
  playground: true,
  introspection: true,
  tracing: true,
}) => new ApolloServer({
  schema,
  ...options,
})

export const setup = async () => {
  const schema = await initialize([DictionaryResolver])
  return setupServer(schema)
}