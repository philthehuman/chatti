import React from 'react'
import {Link} from 'react-router-dom'

const Message = ({message}) => {
    
    console.log(message)
    return (
        <div>
            {message ?
            <>
            <Link to={`messages/${message.id}`}><h4>{message.text}</h4></Link>
            <p>{message.user}</p>
            </> :
            <>
            <p>Invalid message id, return <Link to="/">HOME</Link></p>
            </>}
        </div>
            
    )
}

export default Message