import React from 'react';
import './styles/CompanyCard.css';
import { Link } from 'react-router-dom';

const CompanyCard = ({handle, name, description, logo_url}) => {
 

    return (
        <div className="Card">
            <Link className="Card-link" to={`/companies/${handle}`}>
                    <div className="Card-title">{name}</div>
                    <div className="Card-Logo"><img src={logo_url} alt="logo" /></div>
                    <p className="Card-body">{description}</p>
            </Link>
         </div>
    )
}

export default CompanyCard;