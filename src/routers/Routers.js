import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Header from '../components/pages/header/Header';
import AlumniHome from '../components/alumniComponents/pages/home/Home';
import AlumniSignup from '../components/alumniComponents/pages/signup/Signup';
import AlumniLogin from '../components/alumniComponents/pages/login/Login';

import CompanyPrivateRoutes from './CompanyPrivateRoutes'
import AlumniContextProvider from '../components/companyComponents/context/AlumniContext';
import AuthContextProvider from '../components/companyComponents/context/AuthContext'
import CompanyHome from '../components/companyComponents/pages/home/Home';
import CompanySinup from '../components/companyComponents/pages/signup/Signup';
import CompanyLogin from '../components/companyComponents/pages/login/Login';
import AllAlumni from '../components/companyComponents/pages/alumni/AllAlumni'
const Routers = () => {
    return (
        <Router>
            <MDBRow>
                <MDBCol><Header /></MDBCol>
            </MDBRow>
            <MDBRow>
                <Switch>
                    <AuthContextProvider>
                    <AlumniContextProvider >
                        {/* <Route exact path="/alumni" component={AlumniHome} />
                        <Route exact path="/alumni/register" component={AlumniSignup} />
                        <Route exact path="/alumni/login" component={AlumniLogin} /> */}
                        <Route exact path="/company/register" component={CompanySinup} />
                        <Route exact path="/company/login" component={CompanyLogin} />
                        <Route exact path="/company" component={CompanyHome} />
                        <CompanyPrivateRoutes exact path="/allAlumni" component={AllAlumni} />
                    </AlumniContextProvider>
                    </AuthContextProvider>
                </Switch>
            </MDBRow>
        </Router>
    );
}
 
export default Routers;