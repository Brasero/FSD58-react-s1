import React from 'react'
import ReactDOM from 'react-dom/client'
import "normalize.css";
import App from './App.jsx'
import './index.css'
import {PostProvider} from './context/postContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
 <PostProvider>
  <App/>
 </PostProvider>
</React.StrictMode>
)