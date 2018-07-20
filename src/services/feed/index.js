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

const getId = list => {
  list.map(res => {
    const regex = /(^.*)\/(.*)?\..{3,}$/g
    return regex.exec(res)[2]
  })
}

const feed = { list, getId }

export default feed
