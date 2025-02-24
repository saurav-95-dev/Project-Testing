import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' //For the styling of our app
import App from './App.jsx'
import './fanta.css' //For the styling of our app

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
