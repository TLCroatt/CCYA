import React from 'react';
import { Container, Card, CardTitle, CardBody } from 'reactstrap';
import Registration from '..//components/Registration'



export const Register = () => {
  return (
    <Container className="form-container">
      <div>
      <Card>
        <CardBody>
          <CardTitle tag="h2">Register</CardTitle>
          <Registration />
        </CardBody>
      </Card>
    </div>

    </Container>
  );
}

export default Register;