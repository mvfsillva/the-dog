import config from '../config'

const feedURL = `${config.api.baseUrl}${config.feed.list}`

const configFetch = token => ({
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${token}`,
  },
})

const handleFeed = res =>
  res.json().then(({ list = [] }) => {
    list
  })
const handleError = () => ({ list: [] })

const list = token =>
  fetch(feedURL, { qs: { a: 1 } }, configFetch(token))
    .then(handleFeed)
    .catch(handleError)

const feed = { list }

export default feed
