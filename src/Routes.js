import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CompaniesList from './CompaniesList';
import CompanyDetail from './CompanyDetail';
import JobsList from './JobList';
import LoginOrSignup from './LoginOrSignup';
import Profile from './Profile';
import Home from './Home';
import AppliedJobs from './AppliedJobs';


const Routes = () => {

    return (
        <Switch >
            <Route exact path='/'>
                <Home />
            </Route>
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
                <Profile />
            </Route>
            <Route exact path='/profile/applied'>
                <AppliedJobs />
            </Route>
            <Redirect to='/' />

        </Switch>
    )
}

export default Routes;