import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = ({loggedInUser, activateUser}) => {

    function logout() {
        activateUser("")
    }

    return (
        <div>
            <Link to="/messages">Home</Link>
            <Link to="/about">About</Link>
            {loggedInUser ? 
                    <>
                        {loggedInUser}
                        <Link to="/newmessage">New Message</Link>
                        <Link to="/messages" onClick={logout}>Logout</Link>
                    </> 
                :   <>
                        <Link to="/">Sign Up</Link>
                        <Link to="/login">Login</Link>
                        Guest
                    </>}

        </div>
    )
}

export default Navigation