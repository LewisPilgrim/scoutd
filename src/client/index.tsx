import React from "react"
import {createRoot} from "react-dom/client"
import App from "./App"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./components/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

const rootEl = document.querySelector("#root")
if(!rootEl) throw new Error("Cannot find root element with that id")
const root = createRoot(rootEl)
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)