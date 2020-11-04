import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { EMAIL_REGEX } from '../../constants/regex.constants';
/* UI */
import { TextField, Button } from '@material-ui/core';
import { validateField } from '../../utils/validate.util';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { changeEmailSuccess } from '../../store/features/emailFormSuccess';

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
    <form
      onSubmit={onSubmit}
      autoComplete="off"
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: 16,
        gap: 10,
      }}
    >
      <TextField
        inputRef={register(validateField('name'))}
        variant="outlined"
        name="name"
        error={errors.name ? true : false}
        label={errors.name ? '*required' : '*name'}
      />
      <TextField
        inputRef={register(validateField('surname'))}
        variant="outlined"
        name="surname"
        error={errors.surname ? true : false}
        label={errors.surname ? '*required' : '*surname'}
      />
      <TextField
        inputRef={register(validateField('email', EMAIL_REGEX))}
        variant="outlined"
        name="email"
        error={errors.email ? true : false}
        label={errors.email ? '*required' : '*email'}
      />
      <ErrorMessage>
        {errors.email || errors.surname || errors.name
          ? 'Please fill in the required fields'
          : null}
      </ErrorMessage>
      <Button size="large" variant="outlined" type="submit">
        Next
      </Button>
    </form>
  );
};
export default EmailVerificationForm;
