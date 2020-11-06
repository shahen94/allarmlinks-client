import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EmailValidation from './pages/EmailRegistration/EmailRegistration';
import Home from './pages/Home/Home';
import PhoneRegistration from './pages/PhoneRegistration/PhoneRegistration';
import Volunteer from './pages/volunteer/Volunteer';

const useStyles = makeStyles({
  root: {
    padding: '1.2rem 2rem',
    fontFamily: 'roboto',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className={classes.root}>
        <Typography color="textSecondary" variant="h5" component="h1">
          ALLARMLINKS
        </Typography>
      </header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/registration/email">
            <EmailValidation />
          </Route>
          <Route path="/registration/phone">
            <PhoneRegistration />
          </Route>
          <Route path="/registration/volunteer">
            <Volunteer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
