import 'reflect-metadata'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema, resolvers } from './graphql'

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  }),
)

const PORT = process.env.PORT || 8080

app.listen(PORT, async () => {
  console.log('Server is running on port', PORT)
})
