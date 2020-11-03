import React, { FC } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { EMAIL_REGEX } from '../../constants/regex.constants';
import { validateField } from '../../utils/validate.util';
import { changeStatus } from '../../store/features/emailFormSuccess';
import { useDispatch } from 'react-redux';

type formValues = {
  name: string;
};

const Form: FC = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'all',
  });
  const dispatch = useDispatch();

  const onSubmit: any = handleSubmit((data: formValues) => {
    console.log(data);
    dispatch(changeStatus(true));
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
        label={errors.name ? errors.name.message : '*name'}
      />

      <TextField
        inputRef={register(validateField('surname'))}
        variant="outlined"
        name="surname"
        error={errors.surname ? true : false}
        label={errors.surname ? 'surname is required' : '*surname'}
      />
      <TextField
        inputRef={register(validateField('email', EMAIL_REGEX))}
        variant="outlined"
        name="email"
        error={errors.email ? true : false}
        label={errors.email ? 'email is required' : '*email'}
      />
      <Button size="large" variant="outlined" type="submit">
        Submit
      </Button>
    </form>
  );
};
export default Form;
