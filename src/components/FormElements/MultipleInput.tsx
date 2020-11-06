import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { TextField, Button, Typography, makeStyles } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Event } from '../../types/main';

const useStyles = makeStyles({
  cont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: '0 20px',
    margin: '20px 10px',
  },
  passCodeField: {
    width: 18,
    height: 55,
    margin: '5px',
    borderRadius: 5,
    boxShadow: '2px 2px 2px 1px #D6D6D6, -1px -1px 1px #E6E6E6',
    background: 'white',
    padding: '0 9px',
    flexDirection: 'row',

    '& .MuiInputBase-root::before': {
      display: 'none',
    },
    '& .MuiInputBase-input': {
      // padding: '15px',
      fontSize: 22,
    },
  },
});

const MultipleInput = () => {
  const classes = useStyles();
  const [refs, setRef] = useState<React.MutableRefObject<any>[]>([
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ]);

  const [codes, setCodes] = useState<string[]>(new Array(6).fill(null));

  const handleChange = (idx: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    setCodes((state) =>
      state.map((el, elemIndex) => (elemIndex === idx ? value : el))
    );
    console.log(codes);

    if (idx < 5) {
      refs[idx + 1].current.focus();
    }
  };
  /* ANCHOR paste problem */
  const handlePaste = (idx: number) => (e: Event) => {
    let text: string = e.clipboardData.getData('Text');
    while (text.length) {
      e.target.value = text;
      text = text.slice(1);
      console.log(text);
      console.log(idx);
      refs[idx + 1].current.focus();
    }
  };

  return (
    <div className={classes.cont}>
      {refs.map((ref: any, idx: number) => (
        <TextField
          type="text"
          className={classes.passCodeField}
          name="number"
          id="n1"
          inputRef={ref}
          inputProps={{ maxLength: 1 }}
          onInput={handleChange(idx)}
          onPaste={handlePaste(idx)}
        />
      ))}
    </div>
  );
};

export default MultipleInput;
