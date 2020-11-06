import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
  makeStyles,
  InputAdornment,
  Paper,
  InputBase,
  Button,
  Grid,
} from '@material-ui/core';

import Facebook from '@material-ui/icons/Facebook';

const useStyles = makeStyles({
  root: {
    background: 'white',
    boxShadow: '2px 2px 2px 1px #D6D6D6, -1px -1px 1px #E6E6E6',
    borderRadius: 5,
    margin: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',

    '& .MuiGrid-item': {
      padding: '0 4px',
    },

    '& .MuiInput-underline::before': {
      display: 'none',
    },

    '& .MuiFormControl': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    '& .MuiInputBase-input': {
      margin: 0,
      padding: 5,
    },
    '& .MuiInputLabel-animated': {
      transform: 'translate(0, 15px) scale(1)',
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(0, 0) scale(0.75)',
    },
  },
});

interface Props {
  children: JSX.Element[] | JSX.Element;
  label: string;
}

const InputWithIcon = ({ children, label }: Props) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={1}>
      <Grid item>{children}</Grid>
      <Grid item>
        <TextField label={label} />
      </Grid>
    </Grid>
  );
};

export default InputWithIcon;
