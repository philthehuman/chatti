import React from 'react'
import Message from './Message'

const Messages = ({messageList}) => {
    console.log(messageList)
    return (
        <div>
            <h1>Messages</h1>
            {messageList && messageList.map((message, index) => 
                <div>
                    <Message message={message} key={index}/>    
                </div>
            )}
            
        </div>
    )
}

export default Messages