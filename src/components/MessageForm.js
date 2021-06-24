import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'


const MessageForm = ({history, addMessage}) => {

    const {store, dispatch} = useGlobalState()
    const {loggedInUser, messageList} = store

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

    function getNextId(){
        const id = messageList.map(m => m.id)
        return Math.max(...id) + 1
      }

    function addMessage(messageText){
        const message = {
          id: getNextId(),
          text: messageText,
          user: loggedInUser
        }
        dispatch({
          type: "addMessage",
          data: message
        })
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