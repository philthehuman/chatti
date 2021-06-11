import React, {useState} from 'react'

const LoginForm = ({history, activateUser}) => {

    const initialFormData = {
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialFormData)

    function handleFormData(event){
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        activateUser(formData.email)
        return history.push("/")
        
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" onChange={handleFormData}/>
                </p><p>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" placeholder="Password" onChange={handleFormData}/>
                <input type="submit" value="login" />
                </p>
            </form>
        </div>
    )
}

export default LoginForm