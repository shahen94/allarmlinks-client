import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const EmailNotification = () => {
  const [email, setEmail] = useState('anEmailThatWillBeReplaced@Later.com');
  const [resend, setResend] = useState(false);
  const handleResendButton = () => {
    setResend((state) => !state);
  };

  return (
    <Box color="text.primary" margin={4}>
      <Link target="_blank" href="https://mail.google.com">
        <Typography variant="h6" component="h6">
          Verify Your Email Address
        </Typography>
      </Link>
      <Typography color="textSecondary" component="p">
        We have send an email to <strong>{email}</strong> to verify your
        address. Please click the link in that email to continue.
      </Typography>
      {resend && (
        <Typography color="secondary" component="p">
          A new Email has been sent to your email. Please confirm it.
        </Typography>
      )}

      <Typography color="textSecondary" component="p"></Typography>
      <Button onClick={handleResendButton} color="primary" variant="outlined">
        Resend email
      </Button>
    </Box>
  );
};

export default EmailNotification;
