const apiConfig = {
  api: {
    baseUrl: 'https://api-iddog.idwall.co',
  },
}

const config = {
  user: {
    signup: '/signup',
  },
  feed: {
    list: '/feed',
  },
}

export default {
  ...apiConfig,
  ...config,
}
