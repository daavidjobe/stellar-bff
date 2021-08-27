import { describe } from 'mocha'
import { expect } from 'chai'
import { createKey, hit, getInfo } from './'

describe('countapi', () => {
  it('creates a new key', async () => {
    const response = await createKey({})
    expect(response.namespace).to.equal('default')
  })

  it('increments hit count', async () => {
    const info = await getInfo({ key: 'visits', namespace: 'default' })

    const response = await hit({ key: 'visits', namespace: 'default' })
    expect(response.value).to.equal(info.value + 1)
  })
})
