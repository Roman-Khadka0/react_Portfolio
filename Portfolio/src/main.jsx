import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Lightmode from './Components/Lightmode/Lightmode.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Lightmode  />,
  },
  {
    path:"l",
    element:<Dashboard />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
