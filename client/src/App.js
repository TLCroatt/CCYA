import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Layout  from "./components/Layout";
import  Home  from "./pages/Home";
import  Teams  from "./pages/Teams";
import  Register  from "./pages/Register";
import Sponsors  from "./pages/Sponsors";
import Members from "./pages/Members";
import Schedule from "./pages/Schedule";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Router>
            
            
            <Switch>
              <Route path="/members" component={Members} />
              <Route path="/register" component={Register} />
              <Route path="/schedule" component={Schedule} />
              <Route path="/sponsors" component={Sponsors} />
              <Route path="/teams" component={Teams} />
              <Route path="/home" component={Home} />
            </Switch>
            
          </Router>
        </Layout>
      </React.Fragment>
    );
  }

}

export default App;
