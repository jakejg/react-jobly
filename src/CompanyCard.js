import React from 'react';
import './styles/CompanyCard.css';
import { Link } from 'react-router-dom';

const CompanyCard = ({handle, name, description }) => {
const logo = "https://thumbs.dreamstime.com/b/realty-flat-apartment-modern-building-logo-design-graphic-style-realty-flat-apartment-modern-building-logo-design-graphic-style-158041756.jpg"

    return (
        <div className="Card">
            <Link className="Card-link" to={`/companies/${handle}`}>
                    <div className="Card-title">{name}</div>
                    <div className="Card-Logo"><img src={logo} alt="logo" /></div>
                    <p className="Card-body">{description}</p>
            </Link>
         </div>
    )
}

export default CompanyCard;