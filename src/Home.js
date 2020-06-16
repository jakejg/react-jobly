import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';
import TokenContext from './TokenContext';

const Home = () => {
    const { tokenData } = useContext(TokenContext);

    return (
        <div className="Home">
            <div className="Home-container">
                <h1>Jobly</h1>
                <p>All the jobs in one, convenient place</p>
                {tokenData ? <div className="Home-welcome">Welcome back!</div> : <Link to='/login' className="btn btn-primary">Log in</Link>}
            </div>
        </div>
    )
}

export default Home