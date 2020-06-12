import React from 'react';
import './styles/App.css';
import Routes from './Routes';
import NavBar from './NavBar';
import useLocalStorage from './hooks/useLocalStorage';
import TokenContext from './TokenContext';

function App() {
    const [token, setToken] = useLocalStorage('token');
   
    return (
        <div className="App">
            <TokenContext.Provider value={{token, setToken}} >
                <NavBar />
                <Routes />
            </TokenContext.Provider>
        </div>
    );
}

export default App;
