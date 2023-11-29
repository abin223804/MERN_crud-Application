import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import axios from 'axios'

axios.defaults.baseURL="http://localhost:4000";
axios.defaults.withCredentials=true;

ReactDOM.createRoot(document.getElementById('root')).render( <App />)





