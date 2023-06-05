import React from "react";
import { Link } from "react-router-dom";

const Login = ({ onSubmit }: any) => {



    return (
        <div data-testid="login-form">
            <h1>Login</h1>
            <form onSubmit={onSubmit} name="login-form">
                <label>Name: </label>
                <input type="text" name="name" data-testid="name-input" required></input>
                <label>Password: </label>
                <input type="password" name="password" data-testid="pass-input" required></input>
                {/* <span><a href={"/forgot"}>Forgot password?</a></span> */}
                <Link to="/forgot">Forgot password?</Link>
                <button type="submit" name="Submit" onClick={onSubmit}>Submit</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register.</Link>.</p>
        </div>
    )
}

export default Login