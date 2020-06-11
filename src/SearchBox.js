import React, { useState } from 'react';

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
        <div className="Search">
            <form>
                <input className="Search-input" type="text" value={search} onChange={handleChange} />
                <button onClick={handleSubmit} >Submit</button>
            </form>
        </div>
    )
}

export default SearchBox;