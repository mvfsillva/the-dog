const isAuthenticated = () => !!localStorage.getItem('token')

const auth = { isAuthenticated }

export default auth
