import React from 'react';
import './CompanyCard.css';
import { Link } from 'react-router-dom';

const CompanyCard = ({handle, name, description, logo_url}) => {
 

    return (
        <Link to={`/companies/${handle}`}>
        <div className="Card">
            <div className="Card-title">{name}</div>
            <div className="Card-Logo"><img src={logo_url} alt="logo" /></div>
            <p className="Card-body">{description}</p>
        </div>
        </Link>
    )
}

export default CompanyCard;