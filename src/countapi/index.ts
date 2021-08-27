import { get, serialize } from '../http-client'
import type { CreateParams, HitParams, InfoParams } from './types'

// CountAPI - Integer as a service

const BASE_URL = 'https://api.countapi.xyz'

export const createKey = async (params: CreateParams): Promise<CreateParams> => {
  return await get(`${BASE_URL}/create?${serialize(params)}`, {
    key: String,
    namespace: String,
    value: Number,
  })
}

export const hit = async ({ key, namespace = 'default' }: HitParams): Promise<{ value: number }> => {
  return await get(`${BASE_URL}/hit/${namespace}/${key}`, {
    value: Number,
  })
}

export const getInfo = async ({
  key,
  namespace = 'default',
}: InfoParams): Promise<{
  value: number
  ttl: number
}> => {
  return await get(`${BASE_URL}/info/${namespace}/${key}`, {
    value: Number,
    ttl: Number,
  })
}
