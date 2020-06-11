import React, { useEffect, useState } from 'react';
import JoblyAPI from './Api';
import CompanyCard from './CompanyCard';
import SearchBox from './SearchBox';
import { Container, Row, Col } from 'reactstrap';


const CompaniesList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const getCompanies = async () => {
            let companies = await JoblyAPI.getCompanies();
            setCompanies(companies)
        }
        getCompanies()
    }, [])

    const filterCompanies = async (searchTerm) => {
        let searchResults = await JoblyAPI.getCompanies(searchTerm);
        setCompanies(searchResults)
    }



    return (
        <Container>
            <Row>
                <Col sm="1" xs="0"></Col>
            <Col sm="10" xs="12">
                <SearchBox filterCompanies={filterCompanies} />
                {companies.map(
                ({handle, name, description, logo }) => 
                (<CompanyCard key={handle} name={name} description={description} logo={logo} /> ))}
            </Col>
            <Col sm="1" xs="0"></Col>
            </Row>
        </Container>
    )
}

export default CompaniesList;