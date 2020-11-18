import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Footer } from "./components/Footer/Footer.js";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Teams } from "./pages/Teams";
import { Calendar } from "./components/Calendar";
import { Navigation }  from "./components/Nav/Nav";
import { Jumbo } from "./components/Jumbotron/Jumbotron";
import { Registration } from "./components/Registration";
import { Roster } from "./components/Roster";
import{ Sponsor } from "./components/Sponsor";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Router>
            <Navigation />
            <Jumbo />
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/teams" component={Teams} />
              <Route path="/contact" component={Contact} />
              <Route path="/home" component={Home} />
            </Switch>
            <Footer />
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
