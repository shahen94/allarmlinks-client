import React, { FC, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Divider, TextField } from '@material-ui/core';

const useStyles = makeStyles({
  textField: {
    '& .MuiInputBase-root::before': {
      display: 'none',
    },
    '& .MuiInputLabel-root': {
      transform: 'translate(0.3rem, 1.2rem) scale(1)',
      fontSize: 14,
      padding: ' 0 5px',
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(0.2rem, 0) scale(0.75)',
    },
    '& .MuiInputBase-root': {
      marginTop: '16px',
      padding: '0 10px 4px ',
    },
  },
});

interface IAvailableHours {
  valueForFrom: string | undefined;
  valueForTo: string | undefined;
  handleFromChange:
    | ((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void)
    | undefined;
  handleToChange:
    | ((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void)
    | undefined;
}

const DialogSelect: FC<IAvailableHours> = ({
  valueForFrom,
  valueForTo,
  handleFromChange,
  handleToChange,
}) => {
  const classes = useStyles();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '0 10px',
        boxSizing: 'border-box',
        alignContent: 'flex-start',
        borderRadius: 5,
        background: 'white',
        boxShadow: '2px 2px 2px 1px #D6D6D6, -1px -1px 1px #E6E6E6',
      }}
    >
      <TextField
        className={classes.textField}
        value={valueForFrom}
        type="number"
        label="from"
        name="from"
        fullWidth
        InputProps={{ inputProps: { min: 0, max: 24 } }}
        onChange={handleFromChange}
      />
      <Divider orientation="vertical" flexItem />
      <TextField
        className={classes.textField}
        value={valueForTo}
        onChange={handleToChange}
        type="number"
        label="to"
        name="to"
        fullWidth
        InputProps={{ inputProps: { min: 0, max: 24 } }}
      />
    </div>
  );
};
export default DialogSelect;
