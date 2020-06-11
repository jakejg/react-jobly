import React, { useEffect, useState } from 'react';
import JoblyAPI from './Api';
import CompanyCard from './CompanyCard';
import SearchBox from './SearchBox';
import { Container, Row, Col } from 'reactstrap';
import useFilter from './hooks/useFilter'


const CompaniesList = () => {
    const [companies, setCompanies] = useFilter(JoblyAPI.getCompanies.bind(JoblyAPI));

    useEffect(() => {
        setCompanies()
    }, [])


    return (
        <Container>
            <Row>
                <Col sm="1" xs="0"></Col>
            <Col sm="10" xs="12">
                <SearchBox filter={setCompanies} />
                {companies.map(
                ({handle, name, description, logo }) => 
                (<CompanyCard key={handle} handle={handle} name={name} description={description} logo={logo} /> ))}
            </Col>
            <Col sm="1" xs="0"></Col>
            </Row>
        </Container>
    )
}

export default CompaniesList;