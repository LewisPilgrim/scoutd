import React from "react";
import Login from "../client/components/Login/Login";
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

function setup(jsx: any) {
    return {
        user: userEvent.setup(),
        ...render(jsx),
    }
}

describe("Login", () => {
    it("should fire submit function on button press", async () => {
        const handleSubmit = jest.fn()
        const { user } = setup(<Login onSubmit={handleSubmit} />)
        await user.click(screen.getByRole("button", {name: "Submit"}))
        expect(handleSubmit).toHaveBeenCalled()
    })
})

test("renders Login", () => {
    render(<Login />)
    const textElement = screen.getByText("Login")
    expect(textElement).toBeInTheDocument()
})