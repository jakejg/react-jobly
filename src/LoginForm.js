import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import JoblyAPI from './Api';

const LoginForm = ({formData, handleChange, handleSubmit}) => {
    return(
        <Form >
            <FormGroup>
                <Label htmlFor="username">Username</Label> 
                <Input type="text" id="username" name="username" value={formData.username} onChange={handleChange} /> 
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password</Label> 
                <Input type="text" id="password" name="password" value={formData.password} onChange={handleChange}/> 
            </FormGroup>
            <Button onClick={(e) => handleSubmit(e, JoblyAPI.login.bind(JoblyAPI))}>Submit</Button>
        </Form>
    )
}

export default LoginForm;