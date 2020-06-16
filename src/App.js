import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { decode } from "jsonwebtoken";
import Routes from './Routes';
import NavBar from './NavBar';
import useLocalStorage from './hooks/useLocalStorage';
import TokenContext from './TokenContext';
import JoblyApi from './Api';

function App() {
    const [tokenData, setTokenData] = useLocalStorage('token', '');
    const [currUser, setCurrUser ] = useState({jobs: []});

    useEffect(() => {
        const getUserData = async () => {
            if (tokenData){
                console.log(tokenData)
                const { username } = decode(tokenData);
                let user = await JoblyApi.getUserData(username);
                setCurrUser(currUser => ({...user}))
            }
        }
        getUserData();
    }, [tokenData])
   
    return (
        <div className="App">
            <TokenContext.Provider value={{tokenData, setTokenData, currUser}} >
                <NavBar />
                <Routes currUser={currUser} setCurrUser={setCurrUser}/>
            </TokenContext.Provider>
        </div>
    );
}

export default App;
