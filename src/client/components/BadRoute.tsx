import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const BadRoute = () => {
    const error = useRouteError()
    console.error(error)
    
  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
        return <h1>Error 401</h1>
    } else if (error.status === 404) {
        return <h1>Error 404</h1>
    }

    return (
        <div id="error-page">
            <h1>Oops! {error.status}</h1>
            <p>{error.statusText}</p>
            {error.data?.message && (
                <p>
                    <i>{error.data.message}</i>
                </p>
            )}
        </div>
    )
  } else if (error instanceof Error) {
    return (
        <div id="error=page">
            <h1>Opps! Unexpected Error</h1>
            <p>Something went wrong.</p>
            <p>
                <i>{error.message}</i>
            </p>
        </div>
    )
  } else {
    return <></>
  }
}

export default BadRoute
