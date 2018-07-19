import nock from 'nock'
import config from '../config'
import feed from '.'

describe('[Feed Service]', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should reject with the same error', async () => {
    const message = 'CORS failed'
    nock(config.api.baseUrl)
      .get(config.feed.list)
      .replyWithError(message)
    const { list } = await feed.list('123456')
    expect(list).toEqual([])
  })
})
