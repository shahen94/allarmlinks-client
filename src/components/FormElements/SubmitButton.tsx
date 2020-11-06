import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    border: 0,
    borderRadius: 50,
    padding: '0.5rem 2rem',
    marginTop: '0.5rem',
    alignSelf: 'center',
    fontSize: '1.1rem',
    fontWeight: 400,
  },
});

interface ISubmitButtonProps {
  children?: JSX.Element | string;
  onClick?: () => void;
}

const SubmitButton: FC<ISubmitButtonProps> = ({
  children,
  onClick,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      color="primary"
      variant="contained"
      type="submit"
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
