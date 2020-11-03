import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EmailValidation from './pages/EmailRegistration/EmailRegistration';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/registration/email">
            <EmailValidation />
          </Route>
          <Route path="/registration/phone">
            <EmailValidation />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
