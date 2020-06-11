import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CompaniesList from './CompaniesList';
import CompanyDetail from './CompanyDetail';
import JobsList from './JobList';
import Login from './Login';
import Profile from './Profile';

const Routes = () => {

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
                <Login />
            </Route>
            <Route exact path='/profile'>
                <Profile />
            </Route>

        </Switch>
    )
}

export default Routes;