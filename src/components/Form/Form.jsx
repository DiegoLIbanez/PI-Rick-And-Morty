import React, {useState} from 'react'
import { validationEmail } from './validation';
const Form = ({login}) => {

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value})
        validationEmail({...userData, [property]: value}, setErrors, errors)
        
    };
const handleSubmit = (e) => {
    e.preventDefault()
    login(userData)
}


  return (
    <div className='login-box'>
        <form onSubmit={handleSubmit} >
            <h1>Login</h1>
            <div>
                <label htmlFor="">Username:</label>
                <input type="text" name='username' value={userData.username}  onChange={handleInputChange}/>
                <span>{errors.username}</span>
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" name='password'  value={userData.password} onChange={handleInputChange}/>
                <span>{errors.password}</span>
            </div>
            <button>Login</button>
        </form>
    </div>
  )
}

export default Form





