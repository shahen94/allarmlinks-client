import 'date-fns';
import React, { FC } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles, createMuiTheme } from '@material-ui/core';

const useStyles = makeStyles({
  datePicker: {
    margin: 0,
    boxShadow: '2px 2px 2px 1px #D6D6D6, -1px -1px 1px #E6E6E6',
    border: 0,
    borderRadius: '5px',
    background: 'white',
    padding: '0',
    '& .MuiFormLabel-root': {
      transform: 'translate(1rem, 0.8rem) scale(1)',
      fontSize: 14,
    },
    '& .MuiInputBase-input': {
      content: 'none',
    },
    '& .MuiInput-underline:before': {
      content: 'none',
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(1rem, 0) scale(0.75)',
    },
    '& .MuiInputAdornment-root': {
      transform: 'translate(0, -7px)',
    },
    '& .MuiInputBase-root': {
      marginTop: '8px',
      padding: '0 10px 4px ',
    },
    '& .MuiInputLabel-root': {
      transform: 'translate(1rem, 0.8rem) scale(1)',
      fontSize: 14,
    },
  },
});

function DatePicker() {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        format="dd/MM/yyyy"
        label="Birth Date"
        className={classes.datePicker}
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker;
