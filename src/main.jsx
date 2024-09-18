import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {  persistor,store } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <PersistGate  persistor={persistor}>
        <App />
    </PersistGate>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
