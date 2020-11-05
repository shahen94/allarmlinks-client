import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    border: 0,
    borderRadius: 50,
    padding: '0.8rem',
    marginTop: '1rem',
    width: '50%',
    alignSelf: 'center',
    fontSize: '1.2rem',
  },
});

interface ISubmitButtonProps {
  children?: JSX.Element | string;
}

const SubmitButton: FC<ISubmitButtonProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      style={{}}
      color="primary"
      variant="contained"
      type="submit"
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
