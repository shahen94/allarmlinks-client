import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SubmitButton from '../../components/FormElements/SubmitButton';
import { Typography } from '@material-ui/core';

function Home() {
  const history = useHistory();
  const handleRedirect: () => void = () => {
    history.push('/registration/email');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}
    >
      <div
        style={{
          width: '500px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <img
          style={{
            width: '100%',
          }}
          src="flag.png"
          alt="armenian flag"
        />
        <Typography
          color="textSecondary"
          variant="h5"
          component="h2"
          style={{
            textAlign: 'center',
            padding: '2rem 0 4rem',
          }}
        >
          Support Armenia and Artsakh
        </Typography>
        <SubmitButton onClick={handleRedirect}>Register</SubmitButton>
      </div>
    </div>
  );
}

export default Home;
