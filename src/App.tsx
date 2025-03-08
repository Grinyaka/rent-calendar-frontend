import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styled';
import PagesRouter from './pages/router';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <PagesRouter />
    </ThemeProvider>
  )
}

export default App
