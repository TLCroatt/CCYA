import React, { useContext } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserContext from '../../utils/UserContext';
import './style.css'

const Login = () => {
  const { userData, handleInputChange, handleLogin } = useContext(UserContext);
  return (
    <div>
      <h2 className="loginTitle">Login</h2>
      <hr />
      <Form>
        <FormGroup className="form-group">
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={userData.username}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button onClick={handleLogin} color="success" size="lg">
          Login
        </Button>
        <p>Don't have an account? <Link className="signup-link" to="/signup">Sign up here</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;