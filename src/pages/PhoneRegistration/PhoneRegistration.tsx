import React from 'react';
import PhoneVerificationForm from '../../components/PhoneVerificationForm/PhoneVerificationForm';
import styles from './PhoneRegistration.module.scss';

function PhoneRegistration() {
  return (
    <div className={styles.phone__registration}>
      <PhoneVerificationForm />
    </div>
  );
}

export default PhoneRegistration;
