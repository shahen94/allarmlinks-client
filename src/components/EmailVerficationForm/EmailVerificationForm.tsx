import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { setEmailData } from '../../store/features/emailData';
import { EMAIL_REGEX } from '../../constants/regex.constants';

import styles from './EmailVerificationForm.module.scss';

/* UI */
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import { CircularProgress, Grid } from '@material-ui/core';

/* Components */
import Form from '../FormElements/Form';
import SubmitButton from '../FormElements/SubmitButton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { validateField } from '../../utils/validate.util';
import { changeEmailSuccess } from '../../store/features/emailFormSuccess';

type formValues = {
  name: string;
  surname: string;
  email: string;
};

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
        } else if (res.data.status === 'phoneVerified') {
          throw new Error('you are already registered');
        } else {
          dispatch(changeEmailSuccess(true));
        }
      })
      .catch((error) => console.log(error));
  });

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
        <Grid item sm={12}>
          <Form onSubmit={onSubmit}>
            <TextField
              className={classes.textField}
              inputRef={register(validateField('name'))}
              name="name"
              label="Name"
              fullWidth
              defaultValue="asdf"
            />
            <TextField
              className={classes.textField}
              inputRef={register(validateField('Surname'))}
              fullWidth
              name="surname"
              label="Surname"
              defaultValue="asdf"
            />
            <TextField
              className={classes.textField}
              inputRef={register(validateField('email', EMAIL_REGEX))}
              fullWidth
              name="email"
              label="Email Address"
              defaultValue="sako558@gmail.com"
            />
            <ErrorMessage>
              {errors.email || errors.surname || errors.name
                ? 'Please fill in the required fields'
                : null}
            </ErrorMessage>
            <SubmitButton>Next</SubmitButton>
          </Form>
        </Grid>
      </Grid>
      <div className={styles.popup} hidden={!registered ? true : false}>
        Your email is already verified. But phone is not. To continue
        registration please check out your mail box and follow the link that we
        have sent.
      </div>

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
