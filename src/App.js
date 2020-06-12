import React from 'react';
import './styles/App.css';
import Routes from './Routes';
import NavBar from './NavBar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes />
        </div>
    );
}

export default App;
