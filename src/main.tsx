import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './main.css'
import { AppRoutes } from './routes/AppRoutes'

// biome-ignore lint/style/noNonNullAssertion: ignore
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
)
