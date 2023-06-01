import React from "react";
import "./assets/styles/style.css"

import Typography from "./components/Typography";
import { Link } from "react-router-dom";

export const handleSubmit = () => {
    
}

const App = () => {


    
    return (
        <>
            <Typography variant="h1">Rendered H1</Typography>
            <Link to={"/login"}>Login</Link>

            
        </>
    )
}

export default App;