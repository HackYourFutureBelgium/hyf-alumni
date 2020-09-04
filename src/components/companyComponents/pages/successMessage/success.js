import React from 'react';
import {MDBContainer, MDBRow, MDBCol, Link} from 'mdbreact'
const SuceessMessage =({name})=> {

  return (
    <MDBContainer>
    <MDBRow>
        <MDBCol>
            <h3>sucessfully registered</h3>
            <p>Thank you {name} for being a member of our community</p>
            <Link to="/company/login">Login</Link> <br />
        </MDBCol>
    </MDBRow>
</MDBContainer>

  );
}

export default SuceessMessage

