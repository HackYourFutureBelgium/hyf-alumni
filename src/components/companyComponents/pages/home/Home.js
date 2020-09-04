import React from 'react';
import {Link} from 'react-router-dom';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact'

const CompanyHome = () => {
    return ( 
        <MDBContainer>
            <MDBRow>
                <MDBCol>
                    <p>
                      Refugees often experience challenges in finding a suitable job to apply 
                     and further develop their skills. Yet, the number of unfilled vacancies in the IT 
                     sector is increasing at a fast pace
                    </p>
                <Link to="/company/login">Login</Link> <br />
                 <Link to="/company/register">Sign Up</Link>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
     );
}
 
export default CompanyHome;