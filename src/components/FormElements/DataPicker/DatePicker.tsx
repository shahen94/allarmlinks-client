import React, { FC } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import { Control, Controller } from 'react-hook-form';

const useStyles = makeStyles({
  datePicker: {
    margin: 0,
    boxShadow: '2px 2px 2px 1px #D6D6D6, -1px -1px 1px #E6E6E6',
    border: 0,
    borderRadius: '5px',
    background: 'white',
    padding: '0',
    '& .MuiFormLabel-root': {
      transform: 'translate(0.3rem, 1.2rem) scale(1)',
      fontSize: 14,
    },
    '& .MuiInput-underline:before': {
      content: 'none',
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(0.3rem, 0) scale(0.75)',
    },
    '& .MuiInputAdornment-root': {
      transform: 'translate(0, -7px)',
    },
    '& .MuiInputBase-root': {
      marginTop: '16px',
      padding: '0 10px 4px ',
    },
  },
});

interface IDatePickerProps {
  control: Control<Record<string, any>>;
  error: boolean;
}

const DatePicker: FC<IDatePickerProps> = ({ control, error }) => {
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Controller
        name="birthDate"
        control={control}
        defaultValue={null}
        rules={{ required: true }}
        render={({ onChange, value }) => (
          <KeyboardDatePicker
            fullWidth
            className={classes.datePicker}
            name="birthDate"
            label="*Birth Date"
            format="dd.MM.yyyy"
            value={value}
            error={error}
            onChange={onChange}
            KeyboardButtonProps={{
              'aria-label': 'birth date',
            }}
          />
        )}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
