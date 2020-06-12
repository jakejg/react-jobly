import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Routes from './Routes';
import NavBar from './NavBar';
import useLocalStorage from './hooks/useLocalStorage';
import TokenContext from './TokenContext';
import JoblyApi from './Api';

function App() {
    const [token, setToken] = useLocalStorage('token');
    const [username, setUsername ] = useLocalStorage('username');
    const [currUser, setCurrUser ] = useState({});

    
    useEffect(() => {
        const getUserData = async () => {
            if (username){
            let user = await JoblyApi.getUserData(username);
            console.log(user);
            setCurrUser(currUser => ({...user}))
            }
        }
        getUserData();
    }, [token, username])
   
    return (
        <div className="App">
            <TokenContext.Provider value={{token, setToken, setUsername}} >
                <NavBar />
                <Routes currUser={currUser}/>
            </TokenContext.Provider>
        </div>
    );
}

export default App;
