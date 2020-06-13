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
    console.log(currUser)
    console.log(token)

    
    useEffect(() => {
        const getUserData = async () => {
            if (username){
                let user = await JoblyApi.getUserData(username);
                setCurrUser(currUser => ({...user}))
            }
        }
        getUserData();
    }, [token, username])
   
    return (
        <div className="App">
            <TokenContext.Provider value={{token, setToken, setUsername}} >
                <NavBar />
                <Routes currUser={currUser} setCurrUser={setCurrUser}/>
            </TokenContext.Provider>
        </div>
    );
}

export default App;
