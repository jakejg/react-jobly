import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Routes from './Routes';
import NavBar from './NavBar';
import useLocalStorage from './hooks/useLocalStorage';
import TokenContext from './TokenContext';
import JoblyApi from './Api';

function App() {
    const [tokenData, setTokenData] = useLocalStorage('token', {token: '', username: ''});
    const [currUser, setCurrUser ] = useState({});
  
    useEffect(() => {
        const getUserData = async () => {
            if (tokenData.username){
                let user = await JoblyApi.getUserData(tokenData.username);
                setCurrUser(currUser => ({...user}))
            }
        }
        getUserData();
    }, [tokenData])
   
    return (
        <div className="App">
            <TokenContext.Provider value={{tokenData, setTokenData}} >
                <NavBar />
                <Routes currUser={currUser} setCurrUser={setCurrUser}/>
            </TokenContext.Provider>
        </div>
    );
}

export default App;
