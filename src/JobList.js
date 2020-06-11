import React, { useEffect, useState } from 'react';
import JoblyAPI from './Api';
import JobCard from './JobCard';
import SearchBox from './SearchBox';
import { Container, Row, Col } from 'reactstrap';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getJobs = async () => {
            let jobs = await JoblyAPI.getJobs();
            console.log(jobs)
            setJobs(jobs)
        }
        getJobs()
    }, [])

    const filterJobs = async (searchTerm) => {
        let searchResults = await JoblyAPI.getJobs(searchTerm);
        setJobs(searchResults)
    }


    return (
        <Container>
            <Row>
                <Col sm="1" xs="0"></Col>
            <Col sm="10" xs="12">
                <SearchBox filterJobs={filterJobs} />
                {jobs.map(
                ({id, title, company_handle, salary, equity, state }) => 
                (<JobCard key={id} title={title} salary={salary} equity={equity}/> ))}
            </Col>
            <Col sm="1" xs="0"></Col>
            </Row>
        </Container>
    )
    return <h1>Working</h1>
}

export default JobList;