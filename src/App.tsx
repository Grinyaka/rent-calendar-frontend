import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styled';

function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>

    </ThemeProvider>
  )
}

export default App
