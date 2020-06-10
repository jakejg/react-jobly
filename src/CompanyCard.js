import React from 'react';
import './CompanyCard.css';

const CompanyCard = ({name, description, logo_url}) => {
 

    return (
        <div className="Card">
            <div className="Card-title">{name}</div>
            <div className="Card-Logo"><img src={logo_url} /></div>
            <p className="Card-body">{description}</p>
        </div>
    )
}

export default CompanyCard;