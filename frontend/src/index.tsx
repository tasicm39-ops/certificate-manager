import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080'

axios.get(`${API_URL}/...`)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
