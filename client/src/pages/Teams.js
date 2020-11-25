import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Footer from '../components/Footer/Footer'



export const Teams = (props) => {
  return (
    <div>
    <Container>
      <div>
        <h2>Teams Page</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

      </div>
      <Row>
        <Col>.col</Col>
      </Row>
      <Row>
        <Col>.col</Col>
        <Col>.col</Col>
      </Row>
      <Row>
        <Col>.col</Col>
      </Row>

    </Container>
    <Footer />
    </div>
  );
}

export default Teams;