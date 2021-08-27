import { buildSchema } from 'graphql'
import { createKey, hit, getInfo } from '../countapi'

export const schema = buildSchema(`

  type Key {
    key: String
    value: Int
    namespace: String
  }

  type HitResponse {
    value: Int
  }

  type InfoResponse {
    value: Int
    ttl: String
  }

  type Query {
    hit(key: String!, namespace: String): HitResponse
    createKey(key: String!, namespace: String): Key
    getInfo(key: String!, namespace: String): InfoResponse
  }
`)

export const resolvers = {
  createKey,
  hit,
  getInfo,
}
