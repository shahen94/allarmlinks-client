import React, { FC } from 'react';

import Typography from '@material-ui/core/Typography';
import {
  makeStyles,
  TextField,
  Paper,
  InputBase,
  Button,
} from '@material-ui/core';
import DatePicker from '../../components/FormElements/DataPicker/DatePicker';
import Facebook from '@material-ui/icons/Facebook';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import InputWithIcon from '../../components/FormElements/InputWithIcon/InputWithIcon';
import SubmitButton from '../../components/FormElements/SubmitButton';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
  },

  volunteer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: '#F4F4F4',
    padding: '1.2rem 6rem',
  },

  header: {
    margin: '1rem',
  },

  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    boxShadow: '2px 2px 2px 1px #D6D6D6, -1px -1px 1px #E6E6E6',
    background: 'white',
    padding: '0',
    '& .MuiInputBase-root::before': {
      display: 'none',
    },
    '& .MuiInputLabel-root': {
      transform: 'translate(1rem, 0.8rem) scale(1)',
      fontSize: 14,
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(1rem, 0) scale(0.75)',
    },
    '& .MuiInputBase-root': {
      marginTop: '8px',
      padding: '0 10px 4px ',
    },
  },

  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    flexDirection: 'column',
    boxSizing: 'border-box',
  },

  formFields: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '6rem',
  },

  formColumn: {
    display: 'flex',
    gap: '1.2rem',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  textField: {
    borderRadius: 5,
    boxShadow: '2px 2px 2px 1px #D6D6D6, -1px -1px 1px #E6E6E6',
    background: 'white',
    padding: '0',
    '& .MuiInputBase-root::before': {
      display: 'none',
    },
    '& .MuiInputLabel-root': {
      transform: 'translate(1rem, 0.8rem) scale(1)',
      fontSize: 14,
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(1rem, 0) scale(0.75)',
    },
    '& .MuiInputBase-root': {
      marginTop: '8px',
      padding: '0 10px 4px ',
    },
  },

  facebookIcon: {
    fill: '#3553A4',
    background: 'white',
  },
  linkedInIcon: {
    fill: '#0074B8',
  },
  twitterIcon: {
    fill: '#00A1F9',
  },
});

const fields = [
  'Country',
  'City',
  'Address',
  'Industry of Specialization',
  'Current employer name',
  'Ocupation',
];

const Volunteer: FC = () => {
  const classes = useStyles();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
  };

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.volunteer}>
        <Typography className={classes.header} variant="h5" component="h2">
          Additional Information
        </Typography>

        <form onSubmit={handleFormSubmit} className={classes.form}>
          <div className={classes.formFields}>
            <div className={classes.formColumn}>
              <DatePicker />
              {fields.map((field) => (
                <TextField label={field} className={classes.textField} />
              ))}
            </div>
            <div className={classes.formColumn}>
              <TextField
                className={classes.textField}
                label="Available hours per week"
              />

              <InputWithIcon label="Facebook profile URL">
                <Facebook className={classes.facebookIcon} />
              </InputWithIcon>
              <InputWithIcon label="LinkedIn profile URL">
                <LinkedIn className={classes.linkedInIcon} />
              </InputWithIcon>
              <InputWithIcon label="Twitter Profile URL">
                <Twitter className={classes.twitterIcon} />
              </InputWithIcon>

              <TextField
                className={classes.textField}
                // multiline
                // rows={2}
                label="Other information"
              />
              <Paper
                onSubmit={handleFormSubmit}
                className={classes.paper}
                component="form"
              >
                <InputBase
                  onKeyDown={handleKeyPress}
                  placeholder="skills"
                  inputProps={{ 'aria-label': 'skills' }}
                />
                <Button>add</Button>
              </Paper>
            </div>
          </div>

          <SubmitButton>Finish</SubmitButton>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
