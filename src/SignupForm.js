import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import JoblyAPI from './Api';

const SignupForm = ({formData, handleChange, handleSubmit}) => {

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
            <FormGroup>
                <Label htmlFor="firstName">First Name</Label> 
                <Input type="text" id="firstName" name="first_name" value={formData.firstName} onChange={handleChange}/> 
            </FormGroup>
            <FormGroup>
                <Label htmlFor="lastName">Last Name</Label> 
                <Input type="text" id="lastName" name="last_name" value={formData.lastName} onChange={handleChange}/> 
            </FormGroup>
            <FormGroup>
                <Label htmlFor="email">Email</Label> 
                <Input type="text" id="email" name="email" value={formData.email} onChange={handleChange}/> 
            </FormGroup>
           
            <Button onClick={(e) => handleSubmit(e, JoblyAPI.signup.bind(JoblyAPI))}>Submit</Button>
        </Form>
    )
}

export default SignupForm;