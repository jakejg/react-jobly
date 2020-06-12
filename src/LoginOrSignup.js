import React, { useState, useContext } from 'react';
import './styles/Login.css';
import { Button, Form } from 'reactstrap';
import LoginForm from  './LoginForm';
import SignupForm from './SignupForm';
import TokenContext from './TokenContext';
import FormGroupComp from './FormGroup';
import JoblyAPI from './Api';


const LoginOrSignup = ({
                        signupFields = ['Username', 'Password','First Name', 'Last Name', 'Email'],
                        loginFields = ['Username', 'Password']
                    }) => {
    const [signup, setSignup] = useState(false);
    const [formData, setFormData] = useState({username: "", password:  "", first_name: "", last_name: "", email: ""});
    const { setToken, setUsername } = useContext(TokenContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({...formData, [name]: value}))
    }

    const handleSubmit = async (e, method) => {
        e.preventDefault();
        let token = await method(formData);
        setToken(token);
        setUsername(formData.username);
    }

    const changeToSignup = () => setSignup(true);
    
    const changeToLogin = () => setSignup(false);

    return (       
            <div className="box">
                <Button id="login-btn" color="success" onClick={changeToLogin} className={signup? null: "active"}>Login</Button>
                <Button id="signup-btn" color="success" onClick={changeToSignup} className={signup? "active": null}>Sign Up</Button>
                <Form>
                    {signup? signupFields.map(field=> <FormGroupComp key={field} field={field} formData={formData} handleChange={handleChange} />):
                            loginFields.map(field=> <FormGroupComp key={field} field={field} formData={formData} handleChange={handleChange} />)}
                    <Button onClick={signup?(e) => handleSubmit(e, JoblyAPI.signup.bind(JoblyAPI)) : (e) => handleSubmit(e, JoblyAPI.login.bind(JoblyAPI))}>Submit</Button>
                </Form>
            </div>
    )
}

export default LoginOrSignup;