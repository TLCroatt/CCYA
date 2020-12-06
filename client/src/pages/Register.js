import React, { useContext } from 'react';
import { Container, Card, CardBody } from 'reactstrap';
import Registration from '..//components/Registration'



export const Register = () => {
  return (
    <Container className="form-container">
      <div>
      <Card>
        <CardBody className="register">
          <Registration />
        </CardBody>
      </Card>
    </div>

    </Container>
  );
}

export default Register;