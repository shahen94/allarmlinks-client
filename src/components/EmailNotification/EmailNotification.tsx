import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'roboto',
    boxSizing: 'border-box',
  },
  container: {
    width: 500,
    background: '#F4F4F4',
    padding: '2.5rem 4rem',
    boxSizing: 'border-box',
    borderRadius: 10,
  },

  header: {
    textAlign: 'center',
    marginBottom: '2.5rem',
  },
  question: {
    marginTop: '1rem',
    fontSize: '0.9rem',
  },
  body: {
    fontSize: '0.8rem',
  },
  resend: {
    fontSize: '16px',
    padding: '10px 0',
    textDecoration: 'underline',
  },
});

const EmailNotification = () => {
  const [email, setEmail] = useState('anemail@Later.com');
  const [resend, setResend] = useState(false);
  const classes = useStyles();

  const handleResendButton = () => {
    setResend((state) => !state);
  };

  return (
    <div className={classes.root}>
      <Box className={classes.container} color="text.primary" margin={4}>
        <Typography className={classes.header} variant="h4" component="h6">
          Verify Email
        </Typography>

        <Typography className={classes.body} component="p">
          We sent an email to {email}.
        </Typography>
        <Typography className={classes.body} component="p">
          To continue, please check your email and verify your account
        </Typography>
        <Typography className={classes.question} component="p">
          Didn't receive the Email?
        </Typography>

        {resend && (
          <Typography color="secondary" component="p">
            A new Email has been sent to your email. Please confirm it.
          </Typography>
        )}

        <Typography color="textSecondary" component="p"></Typography>
        <Button
          className={classes.resend}
          onClick={handleResendButton}
          color="primary"
        >
          Resend email
        </Button>
      </Box>
    </div>
  );
};

export default EmailNotification;
