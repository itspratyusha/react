import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter is imp for clickable site as href ma link rakhnu is not a good practice */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
