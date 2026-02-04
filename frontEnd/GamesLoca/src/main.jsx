import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/index.jsx'
import Home from '../src/pages/Home/index'
import "./styles/globalstyles.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>,
)
