import React from 'react';
import { Button } from 'reactstrap';
import "./style.css";

export const Jumbo = (props) => {
  return (

      <div className="hero-image">
        <div className="hero-text">
        <h1 className="display-2">Lady Eagles</h1>
        <p className="lead">Welcome to the official home of the Lady Eagles Softball Team, a division of Commerce City Youth Athletics</p>
        <p className="lead">Welcome to the official home of the Lady Eagles Softball Team, a division of Commerce City Youth Athletics</p>
        <p className="lead">Welcome to the official home of the Lady Eagles Softball Team, a division of Commerce City Youth Athletics</p>
        <p className="lead">Welcome to the official home of the Lady Eagles Softball Team, a division of Commerce City Youth Athletics</p>
        <p className="lead">Welcome to the official home of the Lady Eagles Softball Team, a division of Commerce City Youth Athletics</p>
        <hr className="my-2" />
        <p>"The only player you should try to be better than is the player you were yesterday." - Coach Ingram</p>
        <p className="lead">
          <Button color="success" id="register-btn">Register Here</Button>
        </p>
        </div>
      </div>

  );
};

export default Jumbo;