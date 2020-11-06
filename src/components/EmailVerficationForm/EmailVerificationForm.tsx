import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { EMAIL_REGEX } from '../../constants/regex.constants';
import styles from './EmailVerificationForm.module.scss';
/* UI */
import TextField from '@material-ui/core/TextField';
import SubmitButton from '../FormElements/SubmitButton';
import { validateField } from '../../utils/validate.util';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { changeEmailSuccess } from '../../store/features/emailFormSuccess';
import Typography from '@material-ui/core/Typography';
import Form from '../FormElements/Form';
import { makeStyles } from '@material-ui/styles';

type formValues = {
  name: string;
  surname: string;
  email: string;
};

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    flexDirection: 'column',
    width: 500,
    borderRadius: 10,
  },

  textField: {
    borderRadius: 5,
    boxShadow: '2px 2px 2px 1px #D6D6D6, -1px -1px 1px #E6E6E6',
    background: 'white',
    padding: '0 10px',
    '& .MuiInputBase-root::before': {
      display: 'none',
    },
    '& .MuiInputLabel-root': {
      transform: 'translate(1rem, 1rem) scale(1)',
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(1rem, 0) scale(0.75)',
    },
  },
});

const EmailVerificationForm: FC = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
  });
  const dispatch = useDispatch();

  const onSubmit: () => void = handleSubmit((data: formValues) => {
    console.log(data);
    dispatch(changeEmailSuccess(true));
  });

  return (
    <div className={styles.email}>
      <div className={styles.email__formContainer}>
        <Typography variant="h5" component="h2">
          Registration Form
        </Typography>
        <Form onSubmit={onSubmit} className={styles.email__form}>
          <TextField
            className={classes.textField}
            inputRef={register(validateField('name'))}
            name="name"
            label="Name"
          />
          <TextField
            className={classes.textField}
            inputRef={register(validateField('Surname'))}
            name="surname"
            label="Surname"
          />
          <TextField
            className={classes.textField}
            inputRef={register(validateField('email', EMAIL_REGEX))}
            name="email"
            label="Email Address"
          />
          <ErrorMessage>
            {errors.email || errors.surname || errors.name
              ? 'Please fill in the required fields'
              : null}
          </ErrorMessage>
          <SubmitButton>Next</SubmitButton>
        </Form>
      </div>
    </div>
  );
};
export default EmailVerificationForm;
