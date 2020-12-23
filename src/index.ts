import 'reflect-metadata'
import { setup } from './server'

const PORT: number = parseInt((process.env.PORT || 4000).toString())

export const bootstrap = async () => {
  const server = await setup()

  const { url } = await server.listen(PORT)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

bootstrap()
  .catch(console.error)