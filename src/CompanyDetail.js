import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import JoblyAPI from './Api';
import { Container, Row, Col } from 'reactstrap';
import JobCard from './JobCard';
import './styles/CompanyDetail.css';
import TokenContext from './TokenContext';
import { Redirect } from 'react-router-dom';

const CompanyDetail = () => {
    const { tokenData } = useContext(TokenContext);
    const [company, setCompany] = useState({jobs: []});
    const { handle } = useParams()
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        const getData = async () => {
            if (tokenData) {
                let companyData = await JoblyAPI.getCompany(handle);
                if (Array.isArray(companyData)) setErrors(companyData);
                else setCompany(companyData);
            }
        }
        getData();
        
    },[])

    if (!tokenData) {
        return <Redirect to='/login' />
    }
    
    return (
        <Container>
            <Row>
                <Col sm="1" xs="0"></Col>
            <Col sm="10" xs="12">
                <div className="CompanyDetail-title">{errors.length > 0 ? errors : company.name}</div>
                <div>{company.description}</div>
                {company.jobs.map(
                ({id, title, salary, equity, handle }) => 
                (<JobCard key={id} id={id} title={title} salary={salary} equity={equity} company_handle={handle}/> ))}
            </Col>
            <Col sm="1" xs="0"></Col>
            </Row>
        </Container>
        )
}

export default CompanyDetail;