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

  isLoggedIn: function () {
    return axios.get('/api/users/profile');
  },

  logout: function () {
    return axios.get('/api/users/logout');
  },

  deleteParticipant: function (id){
    return axios.post("api/users/removeParticipant", id);
  }

};