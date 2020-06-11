import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyAPI from './Api';
import { Container, Row, Col } from 'reactstrap';
import JobCard from './JobCard';
import './CompanyDetail.css';

const CompanyDetail = () => {
    const [company, setCompany] = useState({jobs: []});
    const { handle } = useParams()

    useEffect(() => {
        const getData = async () => {
            let data = await JoblyAPI.getCompany(handle)
            setCompany(data)
        }
        getData()
    },[])

    return (
        <Container>
            <Row>
                <Col sm="1" xs="0"></Col>
            <Col sm="10" xs="12">
                <div className="CompanyDetail-title">{company.name}</div>
                <div>{company.description}</div>
                {company.jobs.map(
                ({id, title, company_handle, salary, equity, state }) => 
                (<JobCard key={id} title={title} salary={salary} equity={equity}/> ))}
            </Col>
            <Col sm="1" xs="0"></Col>
            </Row>
        </Container>
        )
}

export default CompanyDetail;