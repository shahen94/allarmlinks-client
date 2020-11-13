import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import 'react-phone-input-2/lib/style.css';
import styles from './PhoneVerification.module.scss';

/* Redux */
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

/* UI */
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Button from '@material-ui/core/Button';
/* components */
import SubmitButton from '../FormElements/SubmitButton';
import Form from '../FormElements/Form';
import Digits from '../FormElements/Digits/Digits';
import ArrowBack from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
  secondHeader: {
    marginBottom: 30,
    fontWeight: 400,
    fontSize: '1.5rem',
    textAlign: 'center',
  },
});

const REACT_APP_URL_PHONE = process.env.REACT_APP_URL_PHONE;
const REACT_APP_URL_PHONE_WIDTH_CODE =
  process.env.REACT_APP_URL_PHONE_WIDTH_CODE;

const PhoneVerificationForm = () => {
  const { token, passCode } = useSelector(({ passCode, token }: RootState) => ({
    passCode,
    token,
  }));

  const history = useHistory();
  const classes = useStyles();

  const [phone, setPhone] = useState('');
  const [sendStatus, setSendStatus] = useState(false);
  const [error, setError] = useState('');
  const [finalClick, setFinalClick] = useState(false);

  const handleOnChange = (value: string) => {
    setError('');
    setPhone(`+${value}`);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!sendStatus) {
        if (phone.length < 12) {
          throw new Error('please fill in the phone number');
        }
        axios
          .post(`${REACT_APP_URL_PHONE}${token}`, { phone: phone })
          .then((res) => {
            console.log(res);
            if (res.status !== 200 && res.data.error) {
              setError(res.data.error);
            } else {
              setSendStatus(true);
            }
          })
          /* ANCHOR bad thing */
          .catch((error) => {
            setError(error.response.data.error);
          });
      } else {
        if (passCode && phone) {
          if (passCode.trim().length < 6) {
            throw new Error('Pass code must have 6 digits');
          }
          if (phone.length < 12) {
            throw new Error('please fill in the phone number');
          }
          setFinalClick(true);
          axios
            .post(`${REACT_APP_URL_PHONE_WIDTH_CODE}${token}`, {
              phone: phone,
              code: passCode,
            })
            .then((res) => {
              if (!res.data.error) {
                history.push('/registration/volunteer');
              } else {
                setFinalClick(false);
                setError(res.data.error);
              }
            })
            .catch((err) => {
              setFinalClick(false);
              setError(err.response.data.error);
            });
        } else {
          throw new Error('Please fill out all of the fields');
        }
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (!token) {
      history.push('/');
    }
  }, [history, token]);

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      spacing={2}
      direction="column"
    >
      <Grid item sm={8}>
        <Typography className={styles.firstHeader} variant="h5" component="h2">
          {sendStatus ? '' : 'Thank you for your Email Verification'}
        </Typography>
      </Grid>
      <Grid item sm={8}>
        <div className={styles.container}>
          <Typography
            className={classes.secondHeader}
            variant="h5"
            component="h2"
          >
            Enter your Phone Number
          </Typography>
          <Form onSubmit={handleFormSubmit}>
            <PhoneInput
              enableSearch
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
              inputClass={styles.input}
              inputStyle={{
                fontSize: 20,
                width: '100%',
              }}
              buttonClass={styles.button}
              buttonStyle={{
                background: 'white',
              }}
              dropdownClass={styles.dropDown}
            />

            <div className={styles.digits}>{!sendStatus ? '' : <Digits />}</div>
            <ErrorMessage>{error ? error : null}</ErrorMessage>
            <Button
              onClick={() => setSendStatus(false)}
              style={{
                position: 'absolute',
                bottom: 5,
                left: 0,
                display: sendStatus ? 'block' : 'none',
              }}
            >
              <ArrowBack color="primary" />
            </Button>
            <SubmitButton>Send Code</SubmitButton>
          </Form>
          {finalClick ? (
            <CircularProgress
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                padding: 0,
              }}
            />
          ) : null}
        </div>
      </Grid>
    </Grid>
  );
};

export default PhoneVerificationForm;
