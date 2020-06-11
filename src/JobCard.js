import React from 'react';
import './JobCard.css';

const JobCard = ({ title, salary, equity, state}) => {
 

    return (
        <div className="JobCard">
            <div className="JobCard-title">{title}</div>
            <ul className="JobCard-body">
                <li>Salary: {salary}</li>
                <li>Equity: {equity}</li>
            </ul>
        </div>
    )
}

export default JobCard;