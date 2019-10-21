import React from 'react'
import Routes from './Routes'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { useAuthUserContext } from '../components'
import theme from './theme'

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <useAuthUserContext.Provider>
          <Routes />
        </useAuthUserContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
