import React, { useEffect, useState } from 'react';
import JoblyAPI from './Api';
import JobCard from './JobCard';
import SearchBox from './SearchBox';
import { Container, Row, Col } from 'reactstrap';
import useFilter from './hooks/useFilter'

const JobList = () => {
    const [jobs, setJobs] = useFilter(JoblyAPI.getJobs.bind(JoblyAPI));

    useEffect(() => {
        setJobs()
    }, [])


    return (
        <Container>
            <Row>
                <Col sm="1" xs="0"></Col>
            <Col sm="10" xs="12">
                <SearchBox filter={setJobs} />
                {jobs.map(
                ({id, title, company_handle, salary, equity, state }) => 
                (<JobCard key={id} title={title} salary={salary} equity={equity}/> ))}
            </Col>
            <Col sm="1" xs="0"></Col>
            </Row>
        </Container>
    )
}

export default JobList;