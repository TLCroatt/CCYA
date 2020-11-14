import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Footer from "./components/Footer/Footer.js";
import About from "./components/About";
import Calendar from "./components/Calendar";
import Container from "./components/Container";
import Nav from "./components/Nav";
import Registration from "./components/Registration";
import Roster from "./components/Roster";
import Sponsor from "./components/Sponsor"



function App() {
  return (
    <Router>
      <div>
        
        <Route exact path="/" component={Home} />
        <Footer />
      
      </div>
    </Router>
    
  );
}

export default App;
