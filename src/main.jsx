import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import AddCoffee from './pages/AddCoffee.jsx'
import UpdateCoffee from './pages/UpdateCoffee.jsx'
import CoffeeDetails from './pages/CoffeeDetails.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import AuthProvider from './context/AuthProvider.jsx'

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
        path: '/coffees/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDetails
      },
      {
        path: '/updateCoffee/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path: '/signin',
        Component: SignIn
      },
      {
        path: '/signup',
        Component: SignUp
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
