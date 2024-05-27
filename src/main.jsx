import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import AuthProvider from './Components/Providers/AuthProvider.jsx';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('https://coffee-server-site-app.vercel.app/coffees')
  },
  {
    path:'/addCoffee',
    element:<AddCoffee></AddCoffee>
  },
  {
    path:'/updateCoffee/:id',
    element:<UpdateCoffee></UpdateCoffee>,
    loader: ({params})=>fetch(`https://coffee-server-site-app.vercel.app/coffees/${params.id}`)
  },
  {
    path:'/signIn',
    element:<SignIn></SignIn>
  },
  {
    path:'/signUp',
    element:<SignUp></SignUp>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:()=>fetch('https://coffee-server-site-app.vercel.app/users')
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
