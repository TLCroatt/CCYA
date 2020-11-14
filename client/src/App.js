import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container }from 'reactstrap';
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer.js";
import About from "./components/About";
import Calendar from "./components/Calendar";
import Navigation from "./components/Nav/Nav";
import Jumbo from "./components/Jumbotron/Jumbotron";
import Registration from "./components/Registration";
import Roster from "./components/Roster";
import Sponsor from "./components/Sponsor";

function App() {
  return (
    <Router>
      <div>
        <Navigation/> 
        <Container>
          <Jumbo />
          <Route exact path="/" component={Home} /> 
        </Container> 
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
