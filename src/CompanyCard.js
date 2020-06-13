import React from 'react';
import './styles/CompanyCard.css';
import { Link } from 'react-router-dom';

const CompanyCard = ({handle, name, description }) => {
const logo = "https://i.pinimg.com/236x/95/82/55/9582551d7cd527bc3431130c6104e78b--city-logo-logo-design.jpg"

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