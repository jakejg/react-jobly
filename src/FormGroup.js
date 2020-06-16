import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const FormGroupComp = ({field, formData, handleChange, type}) => {

    // eslint-disable-next-line
    const underscoreName = field.toLowerCase().replace(' ', '_');

    return (
        <FormGroup>
            <Label htmlFor={field}>{field}</Label> 
            <Input type={field === "Password" ? "password" : "text"} id={field} name={field.toLowerCase().replace(' ', '_')} value={formData.underscoreName} onChange={handleChange} /> 
        </FormGroup>
    )
}

export default FormGroupComp