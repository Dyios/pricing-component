import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary1: 'hsl(174, 77%, 80%)',
    primary2: 'hsl(174, 86%, 45%)',
    primary3: 'hsl(14, 92%, 95%)',
    primary4: 'hsl(15, 100%, 70%)',
    primary5: 'hsl(226, 100%, 87%)',
    neutral1: 'hsl(0, 0%, 100%)',
    neutral2: 'hsl(230, 100%, 99%)',
    neutral3: 'hsl(224, 65%, 95%)',
    neutral4: 'hsl(223, 50%, 87%)',
    neutral5: 'hsl(225, 20%, 60%)',
    neutral6: 'hsl(227, 35%, 25%)',
  },
  typography: {
    fontFamily: ['sans-serif', 'Manrope'],
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
