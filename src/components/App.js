import React, {useReducer, useEffect} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import About from './About'
import LoginForm from './LoginForm'
import Navigation from './Navigation'
import MessageForm from './MessageForm'
import Messages from './Messages'
import Message from './Message'
import NotFound from './NotFound'
import initialMessageList from './../data/message-list.json'
import reducer from '../utils/reducer'


const App = () => {
  // define the initial state
  const initialstate = {
    messageList: [],
    loggedInUser: ""
  }
  // useReducer has two arguments
  // 1. reducer function
  // 2. initial state (same as useState)
  // store is where the state is stored
  // dispatch invokes the reducer function
  const [store, dispatch] = useReducer(reducer, initialstate)
  const {messageList, loggedInUser} = store

  // const [loggedInUser, setLoggedInUser] = useState("")
  // const [messageList, setMessageList] = useState([])


  function activateUser(email){
    // setLoggedInUser(email)
    dispatch({
      type: "setLoggedInUser",
      data: email
    })
  }

  function addMessage(messageText){
    const message = {
      id: getNextId(),
      text: messageText,
      user: loggedInUser
    }
    // setMessageList(
    //   (messageList) => [message, ...messageList]
    // )
    dispatch({
      type: "addMessage",
      data: message
    })
  }

  function findMessage(id){
    return messageList.find(m => m.id === parseInt(id))
  }

  function getNextId(){
    const id = messageList.map(m => m.id)
    return Math.max(...id) + 1
  }

  

  useEffect(() =>{
    // setMessageList(initialMessageList)
    // will run the reucer and will send an object that is the action
    dispatch({
      type: "setMessageList",
      data: initialMessageList
    })
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
