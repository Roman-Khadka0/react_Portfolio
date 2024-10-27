import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Lightmode from './Components/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Lightmode  />,
  },
  {
    path:"dashboard",
    element:<Dashboard />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
