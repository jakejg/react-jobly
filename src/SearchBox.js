import React, { useState } from 'react';
import { Button, Form, Input, InputGroup } from 'reactstrap';
import './styles/SearchBox.css';


const SearchBox = ({filter}) => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        filter(search)
    }

    return (
        <div className="Search mt-5">
             <Form >
                 <InputGroup>
                    <Input placeholder="Enter a search term" type="text" value={search} onChange={handleChange} />
                    <Button id="Search-btn" color="primary" onClick={handleSubmit} >Search</Button>
                </InputGroup>
                
            </Form> 
        </div>
    )
}

export default SearchBox;