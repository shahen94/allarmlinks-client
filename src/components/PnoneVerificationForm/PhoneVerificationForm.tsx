import React, { FC, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import SubmitButton from '../../components/FormElements/SubmitButton/SubmitButton';
import Form from '../../components/FormElements/Form';
import 'react-phone-input-2/lib/style.css';

/* UI */
import { TextField, Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 30,
  },

  passCodeField: {
    width: 40,
    margin: 5,
    padding: 0,
  },
});

type valueType = string;

const PhoneVerificationForm = () => {
  const classes = useStyles();

  const handleOnChange = (value: string) => {
    console.log(value);
  };

  return (
    <div className={classes.root}>
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
          masks={{ am: '.. .. .. ..', at: '(....) ...-....' }}
          inputStyle={{
            padding: '25px 0 25px 60px',
            fontSize: 25,
          }}
          buttonStyle={{
            width: 50,
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
          }}
        />
        <div style={{ margin: '20px 0 ' }}>
          <TextField
            variant="outlined"
            type="text"
            className={classes.passCodeField}
            name="number"
            id="n1"
            inputProps={{ maxLength: 1 }}
          />
          <TextField
            variant="outlined"
            type="text"
            className={classes.passCodeField}
            name="number"
            id="n2"
            inputProps={{ maxLength: 1 }}
          />
          <TextField
            variant="outlined"
            type="text"
            className={classes.passCodeField}
            name="number"
            id="n3"
            inputProps={{ maxLength: 1 }}
          />
          <TextField
            variant="outlined"
            type="text"
            className={classes.passCodeField}
            name="number"
            id="n4"
            inputProps={{ maxLength: 1 }}
          />
          <TextField
            variant="outlined"
            type="text"
            className={classes.passCodeField}
            name="number"
            id="n5"
            inputProps={{ maxLength: 1 }}
          />
          <TextField
            variant="outlined"
            type="text"
            className={classes.passCodeField}
            name="number"
            id="n6"
            inputProps={{ maxLength: 1 }}
          />
        </div>

        <SubmitButton>Send Code</SubmitButton>
      </Form>
      <Button variant="text">resend</Button>
    </div>
  );
};

export default PhoneVerificationForm;
