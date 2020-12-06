import React from 'react';

const UserContext = React.createContext({
  userData: {},
  childData: {},
  loggedIn: false,
  user: {},
  failureMessage: "",
  teamList: [""],
  calendarEvents: [{}],
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