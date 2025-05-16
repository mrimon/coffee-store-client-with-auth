import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import AddCoffee from './pages/AddCoffee.jsx'
import UpdateCoffee from './pages/UpdateCoffee.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        path: '/',
        loader: () => fetch('http://localhost:3000/coffees'),
        Component: Home
      },
      {
        path: '/addCoffee',
        Component: AddCoffee
      },
      {
        path: '/updateCoffee',
        Component: UpdateCoffee
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
