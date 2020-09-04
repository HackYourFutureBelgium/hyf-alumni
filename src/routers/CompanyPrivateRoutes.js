import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../components/companyComponents/context/AuthContext'


 const CompanyPrivateRoutes = ({component: Component, ...rest}) => {
    // const {authToken} = useContext(AuthContext);
    const authToken = true;
    return (
        <Route {...rest} render={(props) =>
            authToken ? (
            <Component {...props} />
        ): (<Redirect to="/company/login" />)}
        />
    )
}

 
export default CompanyPrivateRoutes ;