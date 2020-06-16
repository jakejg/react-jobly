import React, { useEffect, useContext } from 'react';
import JoblyAPI from './Api';
import CompanyCard from './CompanyCard';
import SearchBox from './SearchBox';
import { Container, Row, Col } from 'reactstrap';
import useFilter from './hooks/useFilter';
import TokenContext from './TokenContext';
import { Redirect } from 'react-router-dom';


const CompaniesList = () => {
    const [companies, setCompanies] = useFilter(JoblyAPI.getCompanies.bind(JoblyAPI));
    
    const { tokenData } = useContext(TokenContext);

    useEffect(() => {
        if (tokenData) setCompanies();
    }, [])

    if (!tokenData) {
        return <Redirect to='/login' />
    }

    return (
        <Container>
            <Row>
                <Col sm="1" xs="0"></Col>
            <Col sm="10" xs="12">
                <SearchBox filter={setCompanies} />
                {companies.map(
                ({handle, name, description, logo_url }) => 
                (<CompanyCard key={handle} handle={handle} name={name} description={description} logo_url={logo_url} /> ))}
            </Col>
            <Col sm="1" xs="0"></Col>
            </Row>
        </Container>
    )
}

export default CompaniesList;