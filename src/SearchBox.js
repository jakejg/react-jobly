import React, { useState } from 'react';
import JoblyAPI from './Api';

const SearchBox = ({filterCompanies}) => {
    const [search, setSearch] = useState();

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        filterCompanies(search)
    }

    return (
        <div>
            <form>
                <input type="text" value={search} onChange={handleChange} />
                <button onClick={handleSubmit} >Submit</button>
            </form>
        </div>
    )
}

export default SearchBox;