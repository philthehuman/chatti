import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import About from './About'
import LoginForm from './LoginForm'
import Navigation from './Navigation'
import MessageForm from './MessageForm'
import Messages from './Messages'
import Message from './Message'
import NotFound from './NotFound'
import initiaMessageList from './../data/message-list.json'


const App = () => {
  const [loggedInUser, setLoggedInUser] = useState("")
  const [messageList, setMessageList] = useState([])


  function activateUser(email){
    setLoggedInUser(email)
  }

  function addMessage(messageText){
    const message = {
      id: getNextId(),
      text: messageText,
      user: loggedInUser
    }
    setMessageList(
      (messageList) => [message, ...messageList]
    )
  }

  function findMessage(id){
    return messageList.find(m => m.id === parseInt(id))
  }

  function getNextId(){
    const id = messageList.map(m => m.id)
    return Math.max(...id) + 1
  }

  

  useEffect(() =>{
    setMessageList(initiaMessageList)
  },[])

  return (
    <div >
          <h1>Chatti</h1>
        
          <BrowserRouter>
            <Navigation loggedInUser={loggedInUser} activateUser={activateUser}/>
            <Switch>
              <Route exact path="/">
                <Redirect to="/messages" />
              </Route>
              <Route exact path="/messages" 
              render={() => <Messages messageList={messageList}/>}/>
              <Route exact path="/messages/:id"
              render={(props) => <Message {...props} message={findMessage(props.match.params.id)}/>}/>
              <Route exact path="/about" component={About} />
              <Route exact path="/login" 
              render={(props) => <LoginForm {...props} activateUser={activateUser} />}/>
              <Route exact path="/newmessage" 
              render={(props) => <MessageForm {...props} loggedInUser={loggedInUser} addMessage={addMessage}/> } />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
    </div>
  )
}

export default App
