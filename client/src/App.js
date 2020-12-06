import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import LoginPage from "./pages/Login";
import Signup from "./pages/Signup"
import Members from "./pages/Members";
import Navbar from "./components/Nav/Nav";
import Calendar from "./components/Calendar";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import './App.css';
import UserContext from "./utils/UserContext";
import API from "./utils/API"

const App = () => {
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
  });
  const [childData, setChildData] = useState({
    name: "",
    childDoB: "",
    address: "",
    team: "",
    phone: "",
    parent: "",
    email: ""
  })
  const [teamList, setTeamList] = useState(null);
  const [calendarEvents, setCalendarEvents] = useState(null);
  const [loggedIn, setLoggedin] = useState(false);
  const [user, setUser] = useState(null);
  const [failureMessage, setFailureMessage] = useState(null);
  
  useEffect( () => {
    isLoggedIn();
    fillEvents();
  // eslint-disable-next-line
}, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleChildInputChange = (event) => {
    const { name, value } = event.target;
    setChildData({ ...childData, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: userData.username,
      password: userData.password,
    };
    if (userData.username && userData.password) {
      API.login(data)
        .then((user) => {
          if (user.data.loggedIn) {
            setLoggedin(true);
            setUser(user.data.user);
            console.log('log in successful');
            window.location.href = '/members';
          } else {
            console.log('Something went wrong :(');
            alert('Login failed, Please try again.');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleSignup = (event) => {
    event.preventDefault();
    try {
      const data = {
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        username: userData.username,
        password: userData.password,
      };

      if (userData.username && userData.password) {
        API.signup(data)
          .then((user) => {
            if (user.data === 'email is already in use') {
              alert('Email already in use.');
            }
            if (user.data.loggedIn) {
              if (user.data.loggedIn) {
                setLoggedin(true);
                setUser(user.data.user);
                console.log('log in successful');
                window.location.href = '/members';
              } else {
                console.log('something went wrong :(');
                console.log(user.data);
                setFailureMessage(user.data);
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log('App -> error', error);
    }
  };

  const handleAddChild = (event) => {
    event.preventDefault();
    try {
      const data = {
        childName: childData.childName,
        address: childData.address,
        childDoB: childData.childDoB,
      };

      console.log("handle data", data);
    
      if (childData.childName) {
        API.addChild(data)
          .then((user) => {
            if (loggedIn) {
              setUser(user.data.user);
              window.location.href = '/members';
            } else {
              console.log('something went wrong :(');
              console.log(user.data);
              setFailureMessage(user.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log('App -> error', error);
    }

  }

  const handleRemoveChild = (id) => {
    try{
      const data = {
        childID: id
      };
      console.log("RCData", data);  
      API.deleteParticipant(data)
        .then((user) => {
          if (loggedIn) {
            setUser(user.data.user);
            console.log('Participant removed');
            window.location.href = '/members';
          } else {
            console.log('Something went wrong :(');
            alert('Remove Failed, let Brian know');
          }
        })
      .catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log('App -> error', error);
    }

    
  }

  const isLoggedIn = () => {
    if (!loggedIn) {
      API.isLoggedIn().then((user) => {
        if (user.data.loggedIn) {
          setLoggedin(true);
          setUser(user.data.user);
        } else {
          console.log(user.data.message);
        }
      });
    }
  };

  const isAdmin = () => {
    if(loggedIn && user){
      if(user.admin){
        return true;
      }else
        return false;
    } 
  };

  const logout = () => {
    if (loggedIn) {
      API.logout().then(() => {
        console.log('logged out successfully');
        setLoggedin(false);
        setUser(null);
      });
    }
  };

  const fillEvents = () =>{
    API.fillEvents().then((res) => {
      // console.log(res);
      let teamArray = [];
      let scheduleArray = [];
      //loop through and format data
      for (let i = 0; i < res.data.length; i++) {
        teamArray.push(res.data[i].name);
        let tempSchArray = res.data[i].schedule;
        for (let j = 0; j < tempSchArray.length; j++) {
          let event = {};
          let parts = res.data[i].name.split(" ");
          event.title = parts[2];
          parts = tempSchArray[j].date.split("/");
          event.start = new Date(parts[2], parts[0] - 1, parts[1]);
          event.end = new Date(parts[2], parts[0] - 1, parts[1]);
          event.resource = {
            team: res.data[i].name,
            location: tempSchArray[j].location,
            verses: tempSchArray[j].game
          };
          scheduleArray.push(event)
        };        
      };

      //set data to state
      setTeamList(teamArray);
      setCalendarEvents(scheduleArray);
      // console.log("calendarEvents Loaded");
      // console.log("TeamList", teamList);
      // console.log("Cal Events", calendarEvents);
    });
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    console.log("Entered handleReg");
    try {
      const data = {
        name: childData.name,
        childDoB: childData.childDoB,
        phone: childData.phone,
        team: childData.team,
        address: childData.address
      };

      if (childData.name && childData.phone) {
        API.register(data)
          .then((res) => {
            if (res) {
                console.log('Registration succesful');
                window.location.href = '/';
              } else {
                console.log('something went wrong :(');
              }
            }
      )   }
    } catch (error) {
      console.log('App -> error', error);
    }
  };

  const contextValue = {
    userData,
    loggedIn,
    user,
    failureMessage,
    childData,
    calendarEvents,
    teamList,
    handleInputChange,
    handleLogin,
    handleSignup,
    handleAddChild,
    handleRemoveChild,
    handleChildInputChange,
    handleRegistration,
    fillEvents,
    isAdmin,
    logout,
  };

    return (
      <UserContext.Provider value={contextValue}>
      <Router>
          <Navbar />
            <Switch>
              <Route path="/calendar" component={Calendar} />
              <Route path="/members" component={Members} />
              <Route path="/register" render={() => <Register />}/>
              <Route path="/login" render={() => <LoginPage />}/>
              <Route path="/signup" render={() => <Signup />}/>
              <Route path="/admin" component={Admin} />
              <Route path="/contact" component={Contact} />
              <Route path="/" component={Home} />
            </Switch>
      </Router>
      </UserContext.Provider>
    );
}

export default App;