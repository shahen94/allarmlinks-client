import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { setEmailData } from '../../store/features/emailData';
import { formValues } from '../../types/emailVerification.types';

import styles from './EmailVerificationForm.module.scss';

/* UI */
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import { CircularProgress, Grid } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

/* Components */
import Form from '../FormElements/Form';
import SubmitButton from '../FormElements/SubmitButton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { validateField } from '../../utils/validate.util';
import { changeEmailSuccess } from '../../store/features/emailFormSuccess';

const useStyles = makeStyles({
  textField: {
    borderRadius: 5,
    boxShadow: '2px 2px 2px 1px #D6D6D6, -1px -1px 1px #E6E6E6',
    background: 'white',
    padding: '0 10px',
    margin: '10px 0 0 0',
    '& .MuiInputBase-root::before': {
      display: 'none',
    },
    '& .MuiInputLabel-root': {
      transform: 'translate(1rem, 1rem) scale(1)',
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(1rem, 0) scale(0.75)',
    },
  },
  grid: {
    width: '500px',
    minWidth: '300px',
    padding: '2rem 0',
    borderRadius: '10px',
    background: '#f4f4f4',
  },
  header: {
    marginBottom: '2rem',
  },
});

const REACT_APP_URL_EMAIL = process.env.REACT_APP_URL_EMAIL || '';

const EmailVerificationForm: FC = () => {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [registered, setRegistered] = useState(false);
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit: () => void = handleSubmit((data: formValues) => {
    setClicked(true);
    dispatch(setEmailData(data));

    axios
      .post(REACT_APP_URL_EMAIL, data)
      .then((res) => {
        if (res.data.status === 'email verified') {
          setRegistered(true);
          setClicked(false);
        } else if (res.data.status === 'phone verified') {
          setRegistered(true);
          setClicked(false);
        } else if (res.data.status === 'finished') {
          setError('You are already registered');
          setClicked(false);
        } else {
          dispatch(changeEmailSuccess(true));
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.error);
        setClicked(false);
      });
  });

  const setRef = (str: string) => () => {
    register(validateField(str));
    setError(null);
  };

  return (
    <div className={styles.email}>
      <Grid
        className={classes.grid}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item sm={12}>
          <Typography className={classes.header} variant="h5" component="h2">
            Registration Form
          </Typography>
        </Grid>
        <Grid item sm={10}>
          <Form onSubmit={onSubmit}>
            <TextField
              className={classes.textField}
              inputRef={register(validateField('name'))}
              name="name"
              label="Name"
              fullWidth
            />
            <TextField
              className={classes.textField}
              inputRef={register(validateField('Surname'))}
              fullWidth
              name="surname"
              label="Surname"
            />
            <TextField
              className={classes.textField}
              inputRef={register(validateField('email'))}
              fullWidth
              name="email"
              label="Email Address"
            />
            <ErrorMessage>
              {error
                ? error
                : errors.surname || errors.name || errors.email
                ? 'Please fill in the required fields'
                : null}
            </ErrorMessage>
            <SubmitButton>Next</SubmitButton>
          </Form>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={registered}
        autoHideDuration={6000}
      >
        <MuiAlert severity="warning">
          Your email is already verified. To continue registration please check
          out your mail box and follow the link that we have sent.
        </MuiAlert>
      </Snackbar>
      {clicked ? (
        <CircularProgress
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}
        />
      ) : null}
    </div>
  );
};
export default EmailVerificationForm;
