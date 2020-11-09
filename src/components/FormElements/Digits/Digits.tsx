import React, { useEffect } from 'react';
import useDigitInput, { InputAttributes } from 'react-digit-input';
import styles from './Digits.module.scss';
import { setPassCode } from '../../../store/features/passcode';
import { useDispatch } from 'react-redux';
import { ColorLens } from '@material-ui/icons';

const DigitInputElement = React.forwardRef<
  HTMLInputElement,
  Omit<InputAttributes, 'ref'> & {
    autoFocus?: boolean;
  }
>(({ ...props }, ref) => {
  return (
    <>
      <input
        aria-label="pass code"
        className={styles.input}
        {...props}
        ref={ref}
        inputMode="decimal"
      />
    </>
  );
});

function Digits() {
  const [value, onChange] = React.useState('');
  const digits = useDigitInput({
    acceptedCharacters: /^[0-9]$/,
    length: 6,
    value,
    onChange,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPassCode(value));
  }, [dispatch, value]);

  return (
    <div>
      <div className={styles.group}>
        <DigitInputElement autoFocus {...digits[0]} />
        <DigitInputElement {...digits[1]} />
        <DigitInputElement {...digits[2]} />
        <DigitInputElement {...digits[3]} />
        <DigitInputElement {...digits[4]} />
        <DigitInputElement {...digits[5]} />
      </div>
      <pre hidden>
        <code>{value}</code>
      </pre>
    </div>
  );
}

export default Digits;
