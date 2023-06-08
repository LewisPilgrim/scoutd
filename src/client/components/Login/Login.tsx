import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [isValidLogin, setIsValidLogin] = useState(true);
    const [currentName, setCurrentName] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")

    const handleSubmit = (e: React.FormEvent, name: string, password: string) => {
        e.preventDefault()
        if (name !== "testname" || password !== "testpass") {
            setIsValidLogin(false)
            console.log("Error! Information invalid")
        } else {
            setIsValidLogin(true)
            console.log(`Name: ${name}, Password: ${password}`)
            return
        }
    }


    return (
        <div data-testid="login-form">
            <h1>Login</h1>
            <form onSubmit={(e) => handleSubmit(e, currentName, currentPassword)} name="login-form">
                <label>Name: 
                    <input type="text" name="name" data-testid="name-input" required value={currentName} onChange={e => setCurrentName(e.target.value)}></input>
                </label>
                <label>Password: 
                    <input type="password" name="password" data-testid="pass-input" value={currentPassword} required onChange={e => setCurrentPassword(e.target.value)}></input>
                </label>
                <Link to="/forgot">Forgot password?</Link>
                <button type="submit" name="Submit">Submit</button>
            </form>
            <p>Don't have an account? <span>
                <Link to="/register">Register</Link>.
                </span>
            </p>
            {
                isValidLogin ?
                (
                    ""
                ) : (
                    <div>
                        <p>! Login not valid, please check your username and password are correct.</p>
                    </div>
                )
            }
        </div>
    )
}

export default Login