import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import "./style.css";

export const Jumbo = () => {
  return (

      <div className="hero-image">
        <div className="hero-text">
        <h1 className="display-2">Lady Eagles</h1>
        <p className="lead">Welcome to the official home of the Lady Eagles Softball Team, a division of Commerce City Youth Athletics</p>
        <hr className="my-2" />
        <p className="quote">"The only player you should try to be better than is the player you were yesterday." - Coach Ingram</p>
        <p className="lead">
          <Button color="success" size ="lg" id="register-btn" tag={Link} to="/register">Register Here</Button>
        </p>
        </div>
      </div>

  );
};

export default Jumbo;