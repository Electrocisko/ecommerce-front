import React from 'react'
import ReactDOM from 'react-dom/client'
import {router} from "./router/index.jsx"
import {RouterProvider} from "react-router-dom"
import './index.scss'
import { GlobalProvider } from './context/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
    <RouterProvider router={router}/>
    </GlobalProvider>
  </React.StrictMode>,
)
