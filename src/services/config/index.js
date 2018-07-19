const apiConfig = {
  api: {
    baseUrl: 'https://api-iddog.idwall.co',
  },
}

const config = {
  user: {
    signup: '/signup',
  },
}

export default {
  ...apiConfig,
  ...config,
}
