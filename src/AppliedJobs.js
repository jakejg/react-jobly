import React, { useContext } from 'react';
import TokenContext from './TokenContext';
import JobCard from './JobCard';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const AppliedJobs = () => {
    const { tokenData, currUser } = useContext(TokenContext);

    if (!tokenData.token) {
        return <Redirect to='/login' />
    }

    const jobs = currUser.jobs.map(job => <JobCard key={job.id} id={job.id} title={job.title} salary={job.salary} equity={job.equity} company_handle={job.handle}/>)

    return (
        <Container>
            <Row>
                <Col sm="1" xs="0"></Col>
            <Col sm="10" xs="12">
            <h1 className="text-center">Your Jobs</h1>
                {jobs.length > 0 ? jobs : <div className="text-center">You have not applied to any jobs yet!</div>}
            </Col>
            <Col sm="1" xs="0"></Col>
            </Row>
        </Container>
            
    )
}

export default AppliedJobs;