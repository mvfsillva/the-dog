import config from '../config'

const baseUrl = `${config.api.baseUrl}${config.feed.list}`
const configFetch = token => ({
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${token}`,
  },
})

const handleError = () => ({ list: [] })
const handleFeed = res => res.json().then(({ list = [] }) => ({ list }))

const list = (token, param) =>
  fetch(`${baseUrl}${param}`, configFetch(token))
    .then(handleFeed)
    .catch(handleError)

const feed = { list }

export default feed
