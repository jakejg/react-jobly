import React, { useState, useContext } from 'react';
import './styles/Login.css';
import { Button } from 'reactstrap';
import LoginForm from  './LoginForm';
import SignupForm from './SignupForm';
import TokenContext from './TokenContext';


const LoginOrSignup = () => {
    const [signup, setSignup] = useState(false);
    const [formData, setFormData] = useState({username: "", password:  "", first_name: "", last_name: "", email: ""});
    const {setToken} = useContext(TokenContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({...formData, [name]: value}))
    }

    const handleSubmit = async (e, method) => {
        e.preventDefault();
        let token = await method(formData);
        setToken(token)
    }

    const changeToSignup = () => setSignup(true);
    
    const changeToLogin = () => setSignup(false);

    return (       
            <div className="box">
                <Button id="login-btn" color="success" onClick={changeToLogin} className={signup? null: "active"}>Login</Button>
                <Button id="signup-btn" color="success" onClick={changeToSignup} className={signup? "active": null}>Sign Up</Button>
               
                {signup? <SignupForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>: 
                    <LoginForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>}
            </div>
    )
}

export default LoginOrSignup;