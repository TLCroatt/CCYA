import React from 'react';
import Signupform from '../components/Signupform';
import { Container, Card, CardBody } from 'reactstrap';
import '../../src/Forms.css'

const SignupPage = () => {
    return(
    <Container className="form-container">
        <div>
        <Card>
        <CardBody className="signup-card">
          <Signupform />
        </CardBody>
      </Card>  
        </div> 
    </Container>
    )};

export default SignupPage;