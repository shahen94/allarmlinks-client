import React, { useState } from 'react';
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

/* components */
import SubmitButton from '../FormElements/SubmitButton';
import Form from '../FormElements/Form';
import Digits from '../FormElements/Digits/Digits';

const useStyles = makeStyles({
  secondHeader: {
    marginBottom: 30,
    fontWeight: 400,
    fontSize: '1.5rem',
    textAlign: 'center',
  },
});

interface data {
  phone: string;
  code: string;
}

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

  const [data, setData] = useState<data>({ phone: '', code: '' });
  const [sendStatus, setSendStatus] = useState(false);
  const [error, setError] = useState('');
  const [finalClick, setFinalClick] = useState(false);

  const handleOnChange = (value: string) => {
    setError('');
    setData((state) => ({ ...state, phone: `+${value}` }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setData((state) => ({ ...state, code: passCode }));
      if (data.phone.length < 12) {
        throw new Error('please fill in your phone number');
      }
      if (data.code && data.phone) {
        if (data.code.length < 6) {
          throw new Error('pass code must be 6 digits');
        }
        console.log(data);
        setFinalClick(true);
        axios
          .post(`${REACT_APP_URL_PHONE_WIDTH_CODE}${token}`, data)
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
            setError('request failed');
          });
      } else if ((data.code && !data.phone) || (!data.code && !data.phone)) {
        throw new Error('Please fill out all of the fields');
      } else {
        if (!sendStatus) {
          axios
            .post(`${REACT_APP_URL_PHONE}${token}`, { phone: data.phone })
            .then((res) => {
              if (res.status !== 200 && res.data.error) {
                setError(res.data.error);
              } else {
                setSendStatus(true);
              }
            });
        } else {
          throw new Error('The code is not correct');
        }
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      spacing={2}
      direction="column"
      style={{ width: '100%' }}
    >
      <Grid item sm={12} md={12} lg={12}>
        <Typography className={styles.firstHeader} variant="h5" component="h2">
          {sendStatus ? '' : 'Thank you for your Email Verification'}
        </Typography>
      </Grid>
      <Grid item sm={12} md={12} lg={12}>
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
                fontSize: 25,
              }}
              buttonClass={styles.button}
              buttonStyle={{
                background: 'white',
              }}
              dropdownClass={styles.dropDown}
            />

            <div className={styles.digits}>{!sendStatus ? '' : <Digits />}</div>
            <ErrorMessage>{error ? error : null}</ErrorMessage>
            <SubmitButton>Send Code</SubmitButton>
          </Form>
          {finalClick ? (
            <CircularProgress
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
              }}
            />
          ) : null}
        </div>
      </Grid>
    </Grid>
  );
};

export default PhoneVerificationForm;
