import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import "./style.css";

export const Footer = (props) => {
  
  function changeColor(e) {
    e.target.style.color = "blue";
  }

  function revert(e) {
    e.target.style.color = "black";
  }

  return (
    <footer className="text-center fixed-bottom footer">
      <Row >
        <Col sm="4">
          Phone: 303.286.7669
        </Col>
        <Col sm="4" id="address">
          6820 East 77th Avenue,
          Commerce City, CO 80022
        </Col>
        <Col sm="4">
          <FontAwesomeIcon icon={faFacebook} size="2x" onMouseOver={changeColor} onMouseLeave={revert} onClick={() => window.open("https://www.facebook.com/CCyouthAthletics/?ref=br_rs")}></FontAwesomeIcon>
        </Col>
      </Row>
      <Row >
        <Col sm='4'>
        </Col>
        <Col sm='4'>
        <small className="text-black mx-auto">
          &copy; CCYA 2020 • All Rights Reserved
        </small>
        </Col>
        <Col sm='4'>
        </Col>
      </Row>
    </footer>
  );
}
export default Footer;