import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';

interface IErrorMessageProps {
  children: string | null;
}

const ErrorMessage: FC<IErrorMessageProps> = ({ children }) => {
  return (
    <div>
      <Typography color="secondary">{children}</Typography>
    </div>
  );
};

export default ErrorMessage;
