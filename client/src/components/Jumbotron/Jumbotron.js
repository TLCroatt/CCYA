import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import background from '../../assets/softball.jpeg';
import "./style.css";

const Jumbo = (props) => {
  return (
    
      <Container fluid style={{backgroundImage: `url(${background})`, maxWidth: '988px', maxHeight: '513px', borderRadius: '5px'}}>
      {/* <div className="jumbotron img p-4"> */}
        <h1 className="display-2">Lady Eagles</h1>
        <p className="lead">Welcome to the official home of the Lady Eagles Softball Team, a division of Commerce City Youth Athletics</p>
        <p className="lead">Welcome to the official home of the Lady Eagles Softball Team, a division of Commerce City Youth Athletics</p>
        <p className="lead">Welcome to the official home of the Lady Eagles Softball Team, a division of Commerce City Youth Athletics</p>
        <p className="lead">Welcome to the official home of the Lady Eagles Softball Team, a division of Commerce City Youth Athletics</p>
        <p className="lead">Welcome to the official home of the Lady Eagles Softball Team, a division of Commerce City Youth Athletics</p>
        <hr className="my-2" />
        <p>"The only player you should try to be better than is the player you were yesterday." - Coach Ingram</p>
        <p className="lead">
          <Button color="success">Register Here</Button>
        </p>
      {/* </div> */}
      </Container>
    
  );
};

export default Jumbo;