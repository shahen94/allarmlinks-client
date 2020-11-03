import React from 'react';
import Form from '../../components/Form/Form';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function EmailValidation() {
  const successStatus = useSelector(
    ({ emailFormSuccess }: RootState) => emailFormSuccess
  );
  return <div>{successStatus ? <div>hello</div> : <Form />}</div>;
}
