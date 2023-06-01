import React from "react";

const Login = ({ onSubmit }: any) => {



    return (
        <div data-testid="login-form">
            <h1>Login</h1>
            <form onSubmit={onSubmit} name="login-form">
                <label>Name: </label>
                <input type="text" name="name" data-testid="name-input" required></input>
                <label>Password: </label>
                <input type="password" name="password" data-testid="pass-input" required></input>
                <button type="submit" name="Submit" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login