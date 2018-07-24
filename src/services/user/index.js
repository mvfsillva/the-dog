import config from '../config'

const signupURL = `${config.api.baseUrl}${config.user.signup}`

const configFetch = email => ({
  method: 'POST',
  body: JSON.stringify(email),
  headers: {
    'Content-Type': 'application/json',
  },
})

const login = email =>
  fetch(signupURL, configFetch({ email }))
    .then(res => res.json())
    .catch(err => console.error(err))

const saveUser = ({ email, name }) => {
  localStorage.setItem('email', email)
  localStorage.setItem('name', name)
}

const get = key => localStorage.getItem(key)
const signout = () => localStorage.clear()

const user = {
  login,
  saveUser,
  get,
  signout,
}

export default user
