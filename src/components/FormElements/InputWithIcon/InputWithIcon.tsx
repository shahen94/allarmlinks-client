import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Grid } from '@material-ui/core';

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
      padding: 8,
    },
    '& .MuiInputLabel-animated': {
      transform: 'translate(0, 15px) scale(1)',
      fontSize: 12,
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(0, 0) scale(0.75)',
    },
  },
});

interface Props {
  children: JSX.Element[] | JSX.Element;
  label: string;
  inputRef: any | ((instance: any) => void) | null | undefined;
  name: string;
}

const InputWithIcon = ({ children, label, inputRef, name }: Props) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={1}>
      <Grid xs={2} sm={2} lg={1} item>
        {children}
      </Grid>
      <Grid xs={10} sm={10} lg={11} item>
        <TextField fullWidth name={name} inputRef={inputRef} label={label} />
      </Grid>
    </Grid>
  );
};

export default InputWithIcon;
