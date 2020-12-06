import axios from 'axios';

// eslint-disable-next-line 
export default {
  // logs in user
  login: function (loginInfo) {
    return axios.post('/api/users/login', loginInfo);
  },

  signup: function (signupInfo) {
    return axios.post("/api/users/signup", signupInfo);
  },
  
  addChild: function (childData) {
    return axios.post("api/users/addChild", childData);
  },
  
  deleteParticipant: function (id){
    return axios.post("api/users/removeParticipant", id);
  },

  isLoggedIn: function () {
    return axios.get('/api/users/profile');
  },

  logout: function () {
    return axios.get('/api/users/logout');
  },
  
  fillEvents: function () {
    return axios.get("/api/users/fillEvents");
  },
  
  register: function (regInfo) {
    return axios.post("/api/users/register", regInfo);
  }
};