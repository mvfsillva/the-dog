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

const saveUser = ({ email, ...user }) => {
  localStorage.setItem('email', email)
  Object.entries(user).forEach(([key, value]) => localStorage.setItem(key, value))
}

const getUser = key => localStorage.getItem(key)

const user = {
  login,
  saveUser,
  getUser,
}

export default user
