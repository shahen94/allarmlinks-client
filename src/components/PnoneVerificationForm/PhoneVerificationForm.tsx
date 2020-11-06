import React, { FC, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import SubmitButton from '../FormElements/SubmitButton';
import Form from '../../components/FormElements/Form';
import 'react-phone-input-2/lib/style.css';

/* UI */
import { Typography, makeStyles } from '@material-ui/core';
import MultipleInput from '../FormElements/MultipleInput';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f4f4f4',
    padding: '2rem 5rem',
    width: 450,
    borderRadius: 10,
  },

  firstheader: {
    marginBottom: 30,
    fontWeight: 400,
    fontSize: '1.8rem',
  },

  header: {
    marginBottom: 10,
    fontWeight: 400,
    fontSize: '1.8rem',
  },
});

const PhoneVerificationForm = () => {
  const classes = useStyles();

  const handleOnChange = (value: string) => {
    console.log(value);
  };

  return (
    <div className={classes.wrapper}>
      <Typography className={classes.firstheader} variant="h5" component="h2">
        Thank you for your Email Verification
      </Typography>
      <div className={classes.container}>
        <Typography className={classes.header} variant="h5" component="h2">
          Enter your Phone Number
        </Typography>
        <Form onSubmit={() => {}}>
          <PhoneInput
            country={'am'}
            disableSearchIcon
            onChange={handleOnChange}
            searchPlaceholder="search"
            enableAreaCodeStretch
            inputProps={{
              name: 'phone',
              required: true,
            }}
            masks={{ am: '.. ......', at: '(....) ...-....' }}
            inputStyle={{
              padding: '25px 0 25px 60px',
              fontSize: 25,
              boxShadow: '2px 2px 2px 1px #D6D6D6, -1px -1px 1px #E6E6E6',
              border: 0,
              margin: 0,
            }}
            buttonStyle={{
              width: 50,
              background: 'white',
              display: 'flex',
              justifyContent: 'center',
              border: 0,
              borderRight: '1px solid #D6D6D6',
            }}
          />

          <MultipleInput />

          <SubmitButton>Send Code</SubmitButton>
        </Form>
      </div>
    </div>
  );
};

export default PhoneVerificationForm;
