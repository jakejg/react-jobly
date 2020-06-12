import React, { useState } from 'react';
import FormGroupComp from './FormGroup';
import { Button, Form, Label, FormGroup } from 'reactstrap';

const Profile = ({currUser, fields=['First Name', 'Last Name', 'Email', 'Photo URl','Re-enter Password']}) => {
    const [formData, setFormData] = useState({first_name: "", last_name: "", email: "", photo_url: "", password: ""});
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({...formData, [name]: value}))
    }
    
    return (
        <div>
            <h1>Profile</h1>
            <div className="box">
                
                <Form >
                <FormGroup>
                    <Label>Username</Label> 
                    <div>{currUser.username}</div>
                </FormGroup>
                    {fields.map(field=> <FormGroupComp key={field} field={field} formData={formData} handleChange={handleChange} />)}

                    <Button >Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default Profile;