import React from 'react';
import { Button } from 'reactstrap';
import './styles/Home.css'

const Home = () => {

    return (
        <div className="Home">
            <div className="Home-container">
                <h1>Jobly</h1>
                <p>All the jobs in one, convenient place</p>
                <Button color="primary">Log in</Button>
            </div>
        </div>
    )
}

export default Home