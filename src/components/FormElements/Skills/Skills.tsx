import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  paper: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    boxShadow: '2px 2px 2px 1px #D6D6D6, -1px -1px 1px #E6E6E6',
    background: 'white',
    position: 'relative',
  },
  textField: {
    borderRadius: 5,
    background: 'white',
    padding: '0',
    '& .MuiInputBase-root::before': {
      display: 'none',
    },
    '& .MuiInputLabel-root': {
      transform: 'translate(0.3rem, 1.2rem) scale(1)',
      fontSize: 14,
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

interface SkillsProps {
  value: string | undefined | null;
  onChange:
    | ((
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => void)
    | undefined;
  onKeyPress: ((event: any) => void) | undefined;

  onButtonClick:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const Skills: FC<SkillsProps> = ({
  value,
  onChange,
  onButtonClick,
  onKeyPress,
}) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} component="div">
        <TextField
          className={classes.textField}
          value={value}
          fullWidth
          label="skills"
          onChange={onChange}
          InputProps={{
            onKeyPress: onKeyPress,
          }}
        />
        <Button onClick={onButtonClick}>add</Button>
      </Paper>
    </>
  );
};

export default Skills;
