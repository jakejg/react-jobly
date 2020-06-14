import React, { useState, useContext } from 'react';
import FormGroupComp from './FormGroup';
import { Button, Form, Label, FormGroup, Input, Alert } from 'reactstrap';
import JoblyAPI from './Api';
import './styles/Profile.css'
import TokenContext from './TokenContext';
import { Link } from 'react-router-dom';
// currUser, setCurrUser,
const Profile = ({ fields=['First Name', 'Last Name', 'Email', 'Photo URl']}) => {
    const [formData, setFormData] = useState({first_name: "", last_name: "", email: "", photo_url: "", password:""});
    const [alerts, setAlerts] = useState({color:"", msg:[]});

    const { currUser, setCurrUser } = useContext(TokenContext);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({...formData, [name]: value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let user = await JoblyAPI.updateUser(currUser.username, formData);
        if (Array.isArray(user)){
            setAlerts({color: "danger", msg: user})
        }
        else {
            setCurrUser(currUser => ({...user}))
            setAlerts({color: "success", msg:["Updated Successfully!"]})
        }
        
    }

    const alert = alerts.msg.map(msg => <Alert key={msg} color={alerts.color} className="mt-3" >{msg.replace('instance.', '')}</Alert>);
    
    return (
        <div>
            <h1 className="mt-4 text-center">Profile</h1>
            <div className="text-center"><Link  to='/profile/applied'>See jobs you have applied to</Link></div>
            <div className="box">
                <Form className="Profile">
                    <FormGroup>
                        <Label>Username</Label> 
                        <div>{currUser.username}</div>
                    </FormGroup>
                        {fields.map(field=> <FormGroupComp key={field} field={field} formData={formData} handleChange={handleChange} />)}
                    <FormGroup>
                        <Label htmlFor="password">Re-enter Password</Label>
                        <Input type="password" id="password" name="password" value={formData.password} onChange={handleChange} /> 
                    </FormGroup>    
                        <Button onClick={handleSubmit}>Submit</Button>
                        {alert}
                </Form>
            </div>
        </div>
    )
}

export default Profile;