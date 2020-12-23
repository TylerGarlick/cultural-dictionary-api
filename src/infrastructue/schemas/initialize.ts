import { buildSchema } from 'type-graphql'
import { resolve, sep } from 'path'
import * as pkgDir from 'pkg-dir'

export const initialize = async (resolvers: [Function, ...Function[]]) => {
  const rootPath = await pkgDir(__dirname)
  const schemaFilePath = resolve(`${rootPath}${sep}src${sep}`, 'schema.gql')
  console.log(schemaFilePath)
  return buildSchema({
    resolvers: [...resolvers],
    emitSchemaFile: schemaFilePath,
    // provide the type that implements an interface
    // but is not directly used in schema
    // orphanedTypes: [Person],

  })
}