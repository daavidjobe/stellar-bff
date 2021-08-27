import { describe } from 'mocha'
import { expect } from 'chai'
import { get } from './'

describe('http-client', () => {
  it(`performs successfull call`, async () => {
    try {
      const res = await get('https://api.countapi.xyz/stats', {
        requests: Number,
      })

      expect(res.requests).to.be.greaterThan(1)
    } catch (err) {
      expect.fail(err, 'Call should be successfull.')
    }
  })

  it('can handle errors', async () => {
    try {
      await get('https://api.countapi.xyz/some/unknown/path', {
        value: Number,
      })
    } catch (err) {
      expect(err).instanceof(Error)
    }
  })
})
