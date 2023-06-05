import React from "react"
import {createRoot} from "react-dom/client"
import App from "./App"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ForgotPassword from "./components/Login/ForgotPassword";
import BadRoute from "./components/BadRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/forgot",
        element: <ForgotPassword />,
    },
    {
        path: "*",
        element: <BadRoute />,
    }
]);

const rootEl = document.querySelector("#root")
if(!rootEl) throw new Error("Cannot find root element with that id")
const root = createRoot(rootEl)
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)