import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './Practice_fn_1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Chai />
  </StrictMode>,
)