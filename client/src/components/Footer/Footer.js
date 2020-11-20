import React from 'react';
import { Row, Col } from 'reactstrap';
import "./style.css";

export const Footer = (props) => {
  return (
    <footer className="text-center fixed-bottom footer">
      <Row className="card-footer">
        <Col sm='4'>
        <small className="text-black mx-auto">
         
        </small>
        </Col>
        <Col sm='4'>
        <small className="text-black mx-auto">
          &copy; CCYA 2020 • All Rights Reserved
        </small>
        </Col>
        <Col sm='4'>
        <small className="text-black mx-auto">
          
        </small>
        </Col>
      </Row>
    </footer>
  );
}
export default Footer;