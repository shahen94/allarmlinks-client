import React from 'react';
import Facebook from '@material-ui/icons/Facebook';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  facebookIcon: {
    fill: '#3553A4',
    background: 'white',
  },
  linkedInIcon: {
    fill: '#0074B8',
  },
  twitterIcon: {
    fill: '#00A1F9',
  },
});

export const FacebookIcon = () => {
  const classes = useStyles();
  return (
    <>
      <Facebook className={classes.facebookIcon} />
    </>
  );
};

export const TwitterIcon = () => {
  const classes = useStyles();
  return (
    <>
      <Twitter className={classes.twitterIcon} />
    </>
  );
};

export const LinkedInIcon = () => {
  const classes = useStyles();
  return (
    <>
      <LinkedIn className={classes.linkedInIcon} />
    </>
  );
};
