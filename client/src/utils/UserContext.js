import React from 'react';

const UserContext = React.createContext({
  userData: {},
  childData: {},
  loggedIn: false,
  user: {},
  failureMessage: "",
  handleInputChange: () => {},
  handleLogin: () => {},
  handleSignup: () => {},
  logout: () => {},
  handleRegister: () => {},
  handleAddChild: () => {},
  handleRemoveChild: () => {},
  handleChildInputChange: () => {}
});

export default UserContext;