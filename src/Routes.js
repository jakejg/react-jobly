import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CompaniesList from './CompaniesList';
import CompanyDetail from './CompanyDetail';
import JobsList from './JobList';
import LoginOrSignup from './LoginOrSignup';
import Profile from './Profile';


const Routes = ({currUser}) => {

    return (
        <Switch >
            <Route exact path='/companies'>
                <CompaniesList />
            </Route>
            <Route exact path='/companies/:handle'>
                <CompanyDetail />
            </Route>
            <Route exact path='/jobs'>
                <JobsList />
            </Route>
            <Route exact path='/login'>
                <LoginOrSignup />
            </Route>
            <Route exact path='/profile'>
                <Profile currUser={currUser}/>
            </Route>

        </Switch>
    )
}

export default Routes;