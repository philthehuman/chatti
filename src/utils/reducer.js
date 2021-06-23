// purpose -> state management
// more flexible than useState
// Kind of redux
// more powerful than useState but also more complex

// reducer function
// will take current state
// will receive an action that will modify the state
// will return a new copy of the state with the changes that the action describe
// action is an object with two keys -> type and data

export default function reducer(state, action){
    switch(action.type){
        //depending on the type we'll update the state in different ways
        case "setMessageList":{
            // populate messageList with initialMessageList and return that copy of the state
            return {
                ...state,
                messageList: action.data
            }
        }

        case "addMessage":{
            // add a new message to the list
            return {
                ...state,
                messageList: [action.data, ...state.messageList]
            }
        }

        case "setLoggedInUser": {
            // update loggedInUser's value
            return {
                ...state,
                loggedInUser: action.data
            }
        }

        default: return state
    
    }
}
