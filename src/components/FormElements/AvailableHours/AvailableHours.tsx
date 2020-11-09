import React, { FC, ChangeEvent } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import styles from './AvailableHours.module.scss';

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
    <div className={styles.wrapper}>
      <p className={styles.main__label}>Availability hours</p>
      <div className={styles.main} style={{}}>
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
    </div>
  );
};
export default DialogSelect;
