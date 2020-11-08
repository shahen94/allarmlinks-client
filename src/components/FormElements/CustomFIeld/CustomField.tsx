import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { FC } from 'react';

interface ICustomFieldProps {
  name: string | undefined;
  type?: string | undefined;
  inputRef: any;
  label: string | null | undefined;
  error?: boolean;
}

const useStyles = makeStyles({
  textField: {
    borderRadius: 5,
    boxShadow: '2px 2px 2px 1px #D6D6D6, -1px -1px 1px #E6E6E6',
    background: 'white',
    padding: '0',
    '& .MuiInputBase-root::before': {
      display: 'none',
    },
    '& .MuiInputLabel-root': {
      transform: 'translate(0.3rem, 1.2rem) scale(1)',
      fontSize: 14,
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(0.2rem, 0) scale(0.75)',
    },
    '& .MuiInputBase-root': {
      marginTop: '16px',
      padding: '0 10px 4px ',
    },
  },
});

const CustomField: FC<ICustomFieldProps> = ({
  name,
  inputRef,
  type,
  label,
  error,
  ...props
}) => {
  const classes = useStyles();
  return (
    <TextField
      {...props}
      name={name}
      inputRef={inputRef}
      label={label}
      fullWidth
      type={type}
      className={classes.textField}
      error={error}
    />
  );
};

export default CustomField;
