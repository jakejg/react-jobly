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

    useEffect(() => {
        const getData = async () => {
            if (tokenData.token) {
                let data = await JoblyAPI.getCompany(handle)
                setCompany(data)
            }
        }
        getData()
        
    },[])

    if (!tokenData.token) {
        return <Redirect to='/login' />
    }
    
    return (
        <Container>
            <Row>
                <Col sm="1" xs="0"></Col>
            <Col sm="10" xs="12">
                <div className="CompanyDetail-title">{company.name}</div>
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