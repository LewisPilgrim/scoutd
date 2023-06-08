import React from "react"
import Login from "../client/components/Login/Login"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"

function setup(jsx: any) {
    return {
        user: userEvent.setup(),
        ...render(jsx),
    }
}

describe("Login", () => {
    test("should fire submit function on button press", async () => {
        const handleSubmit = jest.fn()
        const { user } = setup(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
        )
        const nameInput = screen.getByLabelText("Name:")
        const passwordInput = screen.getByLabelText("Password:")

        nameInput.innerHTML = "testname"
        passwordInput.innerHTML = "testpass"
        await user.click(screen.getByRole("button", {name: "Submit"}))
        expect(handleSubmit).toHaveBeenCalled()
    }),
    test("should render Login", () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        )
        const textElement = screen.getByText("Login")
        expect(textElement).toBeInTheDocument()
    }),
    test("should contain link to Register page and Forgot Password page", () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        )
        expect(screen.getByText("Register")).toBeInTheDocument()
        expect(screen.getByText("Forgot password?")).toBeInTheDocument()
    }),
    test("should display login error if isValidLogin state is false", async () => {
        
        const { user } = setup(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        )
        const error = screen.queryByText("! Login not valid, please check your username and password are correct.")
        
        // const validationFn = (name: (string | null), pass: ( string | null)) => {
        //     if (name !== "testname" || pass !== "testpass") {
        //         return error
        //     }
        //     return
        // }

        const placeholder = () => {
            console.log(user);
            
        }
        placeholder()

        expect(error).not.toBeInTheDocument()
        
        const nameInput = screen.getByLabelText("Name:")
        const passwordInput = screen.getByLabelText("Password:")
        const submitBtn = screen.getByRole("button", {name: "Submit"})

        nameInput.innerHTML = "testname"
        passwordInput.innerHTML = "testpass"
        await user.click(submitBtn)
        // validationFn(nameInput.innerHTML, passwordInput.innerHTML)
        expect(error).not.toBeInTheDocument()

        nameInput.innerHTML = "invalid "
        passwordInput.innerHTML = "invalid"
        await user.click(submitBtn)
        // validationFn(nameInput.innerHTML, passwordInput.innerHTML)
        expect(error).toBeInTheDocument()
    })
})

