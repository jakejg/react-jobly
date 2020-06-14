import React, { useContext, useState, useEffect } from 'react';
import './styles/JobCard.css';
import { Button } from 'reactstrap';
import TokenContext from './TokenContext';
import JoblyAPI from './Api';

const JobCard = ({ id, title, salary, equity, company_handle }) => {
const { currUser } = useContext(TokenContext);
const [applied, setApplied ] = useState(false);

// Once current user data is recieved from api, check if this job id matches a job id in the currUser's list
useEffect(() =>{
    if (currUser.jobs.some(job => job.id === id)) setApplied(true);
}, [currUser])

const handleClick = async () => {
    setApplied(applied => !applied);
    let jobStatus = await JoblyAPI.apply(id, currUser.username);
    if (jobStatus === "applied") currUser.jobs.push({id, title, company_handle, state: "applied"})

}
    return (
        <div className="JobCard">
            <div className="JobCard-title">{title}</div>
            <ul className="JobCard-body">
                <li>Salary: {salary}</li>
                <li>Equity: {equity}</li>
            </ul>
            <div className="JobCard-apply-btn">
                {applied ? <Button color="warning">Applied</Button> : <Button color="warning" onClick={handleClick}>Apply!</Button>}
            </div>
            
        </div>
    )
}

export default JobCard;