import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import SB7 from '../assets/SB7.JPG'

 export const ContactCard = (props) => {
  return (
    <Container>
      <Row>
        <Col md='4'></Col>
        <Col md='4'>
        <Card>
          <CardImg top width="100%" src={SB7} alt="coach and player giving high five" />
          <CardBody>
            <CardTitle tag="h3">Contact Us</CardTitle>
            <CardText>
              <h5>Phone: (303)286-7669</h5>
            </CardText>
            <CardText>
              <h5>Email:</h5>
            </CardText>
          </CardBody>
        </Card>
        </Col>
      </Row>

    </Container>
  );
}

export default ContactCard;