import React from 'react'
import Message from './Message'
import { useGlobalState } from '../utils/stateContext'

const Messages = ({}) => {
    const {store} = useGlobalState()
    const {messageList} = store
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