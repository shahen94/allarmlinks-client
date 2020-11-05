import React, { useState } from 'react';
import PhoneVerificationForm from '../../components/PnoneVerificationForm/PhoneVerificationForm';

function PhoneRegistration() {
  const [auth, setAuth] = useState(true);
  return auth ? (
    <div
      style={{
        margin: 10,
      }}
    >
      <PhoneVerificationForm />
    </div>
  ) : (
    <p>your email is not verified</p>
  );
}

export default PhoneRegistration;
