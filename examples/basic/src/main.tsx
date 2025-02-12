import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider, MantineThemeProvider } from '@mantine/core'
import App from './App.tsx'
import '@mantine/core/styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <MantineThemeProvider>
        <App />
      </MantineThemeProvider>
    </MantineProvider>
  </StrictMode>,
)
