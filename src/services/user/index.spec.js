import nock from 'nock'
import config from '../config'
import userService from '.'

describe('[User Service]', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  const mockResponse = (error, status, body) => {
    const req = nock(config.api.baseUrl).post(config.user.signup, _ => true)
    return error ? req.replyWithError(error) : req.reply(status, body)
  }

  it('should resolves with token', async () => {
    const response = { token: 'abcdefg' }
    mockResponse(null, 200, response)
    const user = await userService.login('email~/client.com')

    expect(user).toEqual(response)
  })
})
