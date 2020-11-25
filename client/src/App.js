import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Register from "./pages/Register";
import LoginPage from "./pages/Login";
import Signup from "./pages/Signup"
import Members from "./pages/Members";
import Schedule from "./pages/Schedule";
import Navbar from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Calendar from "./components/Calendar";
import './App.css';


function App() {
    return (
      <Router>
          <Navbar />
            <Switch>
              <Route path="/calendar" component={Calendar} />
              <Route path="/members" component={Members} />
              <Route path="/register" component={Register} />
              <Route path="/schedule" component={Schedule} />
              <Route path="/login" render={() => <LoginPage />}/>
              <Route path="/signup" render={() => <Signup />}/>
              <Route path="/teams" component={Teams} />
              <Route path="/" component={Home} />
            </Switch>
          <Footer />
      </Router>
    );
}

export default App;