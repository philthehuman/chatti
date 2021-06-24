import React from 'react'
import {Link} from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'

const Navigation = () => {

    const {store, dispatch} = useGlobalState()
    const {loggedInUser} = store

    function logout() {
        dispatch({
            type: "setLoggedInUser",
            data: ""
          })
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