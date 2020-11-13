import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

/* redux */
import { setToken } from '../../store/features/token';
import { useDispatch } from 'react-redux';

/* UI */
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

/* constants */
import { REACT_APP_URL_EMAIL } from '../../constants/env.constants';

interface ParamTypes {
  slug: string;
}

export default function GetToken() {
  const { slug }: ParamTypes = useParams();
  const [error, setError] = useState<null | string>(null);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${REACT_APP_URL_EMAIL}${slug}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          if (res.data.status === 'email verified') {
            setTimeout(() => {
              dispatch(setToken(slug));
              history.push('/registration/phone');
            }, 1000);
          }
          if (res.data.status === 'phone verified') {
            setTimeout(() => {
              dispatch(setToken(slug));
              history.push('/registration/volunteer');
            }, 1000);
          }
          if (res.data.status === 'finished') {
            throw new Error('You are already registered');
          }
        } else {
          throw new Error('Oops! Something went wrong.');
        }
      })
      .catch((err) => {
        if (err) {
          setError('Oops! Something went wrong.');
        }
      });
  });
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      {error ? (
        <Typography variant="h5" component="h2">
          {error}
        </Typography>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
