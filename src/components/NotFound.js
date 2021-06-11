import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1>Error 404 - Page Not Found</h1>
            <p>You've gone and typed in the wrong address</p>
            <p>We don't have a page for you here so you get this instead.</p>
            <p>Maybe click one of the nav links or just go away idk you do you</p>
            <Link to="/messages">Go back to the home page ya schmuck</Link>
        </div>
    )
}

export default NotFound