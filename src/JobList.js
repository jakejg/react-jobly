import React, { useEffect, useContext } from 'react';
import JoblyAPI from './Api';
import JobCard from './JobCard';
import SearchBox from './SearchBox';
import { Container, Row, Col } from 'reactstrap';
import useFilter from './hooks/useFilter';
import TokenContext from './TokenContext';
import { Redirect } from 'react-router-dom';

const JobList = () => {
    const [jobs, setJobs] = useFilter(JoblyAPI.getJobs.bind(JoblyAPI));
    const { tokenData } = useContext(TokenContext);

    useEffect(() => {
        if (tokenData) setJobs();
    }, [])

    if (!tokenData) {
        return <Redirect to='/login' />
    }

    return (
        <Container>
            <Row>
                <Col sm="1" xs="0"></Col>
            <Col sm="10" xs="12">
                <SearchBox filter={setJobs} />
                {jobs.map(
                ({id, title, handle, salary, equity }) => 
                (<JobCard key={id} id={id} title={title} salary={salary} equity={equity} company_handle={handle}/> ))}
            </Col>
            <Col sm="1" xs="0"></Col>
            </Row>
        </Container>
    )
}

export default JobList;