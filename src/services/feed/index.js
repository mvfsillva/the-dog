import config from '../config'

const configFetch = token => ({
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${token}`,
  },
})

const handleURL = (param = 'husky') => {
  const category = `?category=${param}`
  return `${config.api.baseUrl}${config.feed.list}${category}`
}

const handleError = () => ({ list: [] })
const handleFeed = res => res.json().then(({ list = [] }) => ({ list }))

const list = (token, param) =>
  fetch(handleURL(param), configFetch(token))
    .then(handleFeed)
    .catch(handleError)

const feed = { list }

export default feed
