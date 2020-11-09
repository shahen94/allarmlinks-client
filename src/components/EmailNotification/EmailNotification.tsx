import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
/* UI */
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    boxSizing: 'border-box',
  },
  container: {
    width: '70vw',
    background: '#F4F4F4',
    padding: '2.5rem 8vw',
    boxSizing: 'border-box',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  header: {
    textAlign: 'center',
    marginBottom: '2.5rem',
    fontSize: '4vw',
  },
  question: {
    marginTop: '1rem',
    fontSize: '0.9rem',
  },
  body: {
    fontSize: '1.2rem',
  },
  resend: {
    fontSize: '14px',
    padding: '10px 0',
    textDecoration: 'underline',
  },
  error: {
    fontSize: '15px',
  },
});

const EmailNotification = () => {
  const emailData = useSelector((state: RootState) => state.emailData);
  const [resend, setResend] = useState(false);
  const classes = useStyles();

  const handleResendButton = () => {
    setResend(true);
    const REACT_APP_URL_EMAIL = process.env.REACT_APP_URL_EMAIL || '';

    axios
      .post(REACT_APP_URL_EMAIL, emailData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className={classes.root}>
      <Box className={classes.container} color="text.primary" margin={4}>
        <Typography className={classes.header} variant="h4" component="h6">
          Verify Email
        </Typography>
        <div>
          <Typography className={classes.body} component="p">
            We sent an email to {emailData.email}.
          </Typography>
          <Typography className={classes.body} component="p">
            To continue, please check your email and verify your account
          </Typography>
        </div>
        <Typography className={classes.question} component="p">
          Didn't receive the Email?
        </Typography>

        <Typography color="textSecondary" component="p"></Typography>
        <Button
          className={classes.resend}
          onClick={handleResendButton}
          color="primary"
        >
          Resend email
        </Button>
        {resend && (
          <Typography className={classes.error} color="secondary" component="p">
            A new Email has been sent to your email. Please confirm it.
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default EmailNotification;
