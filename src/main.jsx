import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Ele deve importar o App que você acabou de criar na raiz
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)