import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' // ❗ 

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
      <ToastContainer />
  </StrictMode>
)
