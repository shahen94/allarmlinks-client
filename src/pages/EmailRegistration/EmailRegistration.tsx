import React from 'react';
import EmailVerificationForm from '../../components/EmailVerficationForm/EmailVerificationForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import EmailNotification from '../../components/EmailNotification/EmailNotification';

export default function EmailValidation() {
  const successStatus = useSelector(
    ({ emailFormSuccess }: RootState) => emailFormSuccess
  );
  return (
    <div>
      {successStatus ? <EmailNotification /> : <EmailVerificationForm />}
    </div>
  );
}
