import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { EMAIL_REGEX } from '../../constants/regex.constants';
import styles from './EmailVerificationForm.module.scss';
/* UI */
import TextField from '@material-ui/core/TextField';
import SubmitButton from '../FormElements/SubmitButton/SubmitButton';
import { validateField } from '../../utils/validate.util';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { changeEmailSuccess } from '../../store/features/emailFormSuccess';
import Typography from '@material-ui/core/Typography';
import Form from '../FormElements/Form';

type formValues = {
  name: string;
  surname: string;
  email: string;
};

const EmailVerificationForm: FC = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
  });
  const dispatch = useDispatch();

  const onSubmit: () => void = handleSubmit((data: formValues) => {
    console.log(data);
    dispatch(changeEmailSuccess(true));
  });

  return (
    <div className={styles.email__formContainer}>
      <Typography variant="h4" component="h2">
        Registration Form
      </Typography>
      <Form onSubmit={onSubmit} className={styles.email__form}>
        <TextField
          className={styles.email__input}
          variant="outlined"
          inputRef={register(validateField('name'))}
          name="name"
          label="Name"
        />
        <TextField
          className={styles.email__input}
          inputRef={register(validateField('Surname'))}
          variant="outlined"
          name="surname"
          label="Surname"
        />
        <TextField
          className={styles.email__input}
          inputRef={register(validateField('email', EMAIL_REGEX))}
          variant="outlined"
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
  );
};
export default EmailVerificationForm;
