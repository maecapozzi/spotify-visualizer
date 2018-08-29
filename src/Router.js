import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

export const Router = (props, children) => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
