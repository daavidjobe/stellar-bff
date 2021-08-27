import { IncomingMessage } from 'http'
import https from 'https'
import { pick, Descriptor } from './utils'

export * from './utils'

export async function get<T>(url: string, d: Descriptor<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    const request = https.get(url, { timeout: 1000 }, (res: IncomingMessage) => {
      if (res.statusCode && res.statusCode / 100 !== 2) {
        return reject(new Error(`HTTP status code ${res.statusCode}`))
      }

      let data = ''
      res.on('data', (chunk: string): void => {
        data += chunk
      })
      res.on('end', () => {
        const value = pick(JSON.parse(data), d)
        if (value instanceof Error) {
          reject(value)
        } else {
          resolve(value)
        }
      })
    })

    request.on('error', (err) => {
      reject(err)
    })
    request.on('timeout', () => {
      request.destroy()
      reject(new Error('timed out'))
    })
  })
}
