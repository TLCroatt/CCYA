import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Teams } from "./pages/Teams";
import { Jumbo } from "./components/Jumbotron/Jumbotron";
import { Register } from "./pages/Register";
import{ Sponsors } from "./pagees/Sponsors";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Router>
            <Navigation />
            <Jumbo />
            <Switch>
              <Route path="/members" component={Members} />
              <Route path="/register" component={Register} />
              <Route path="/schedule" component={Schedule} />
              <Route path="/sponsors" component={Sponsors} />
              <Route path="/teams" component={Teams} />
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
