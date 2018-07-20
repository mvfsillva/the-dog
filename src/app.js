import React from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'

import Routes from './routes'
import theme from './theme'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
)

export default App
