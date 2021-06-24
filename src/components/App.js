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
import {StateContext} from '../utils/stateContext'


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
  const {messageList} = store

  // const [loggedInUser, setLoggedInUser] = useState("")
  // const [messageList, setMessageList] = useState([])


  function findMessage(id){
    return messageList.find(m => m.id === parseInt(id))
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

          <StateContext.Provider value={{store, dispatch}}>
        
          <BrowserRouter>
            <Navigation/>
            <Switch>
              <Route exact path="/">
                <Redirect to="/messages" />
              </Route>
              <Route exact path="/messages" component = {Messages} />
              <Route exact path="/messages/:id"
              render={(props) => <Message {...props} message={findMessage(props.match.params.id)}/>}/>
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/newmessage" component={MessageForm} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
          </StateContext.Provider>
    </div>
  )
}

export default App
