import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
  },
});

interface IErrorMessageProps {
  children: string | null;
}

const ErrorMessage: FC<IErrorMessageProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.root} color="secondary">
        {children}
      </Typography>
    </div>
  );
};

export default ErrorMessage;
