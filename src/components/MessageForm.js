import React, {useState} from 'react'
import {Link} from 'react-router-dom'


const MessageForm = ({history, loggedInUser, addMessage}) => {

    const initialFormData = {
        messageText: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    function handleSubmit(event) {
        event.preventDefault()
        addMessage(formData.messageText)
        document.getElementById("messageText").value = ""
        history.push('/messages')
    }

    function handleFormData(event) {
        setFormData({
            ...formData,
            [event.target.id] : event.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {loggedInUser ?
                <div>
                <label htmlFor="text">{loggedInUser}:</label>
                <input type="textarea" name="messageText" id="messageText" placeholder="What's on your mind?" onChange={handleFormData}/>
                <input type="submit" value="Post" />
                </div>
                : <p>Please <Link to="/login">Log In</Link> Before Posting</p> }

            </form>
        </div>
    )
}

export default MessageForm