import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paper: {
    display: 'flex',
    width: '97.5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    boxShadow: '2px 2px 2px 1px #D6D6D6, -1px -1px 1px #E6E6E6',
    background: 'white',
    padding: '4px',
    position: 'relative',
    '& .MuiInputBase-root::before': {
      display: 'none',
    },
    '& .MuiInputLabel-root': {
      position: 'absolute',
      top: 20,
      left: '0.2rem',
      transform: 'translate(0.3rem, 0) scale(1)',
      fontSize: 14,
      pointerEvents: 'none',
      transition: 'transform 0.3s easy-out',
    },
    '& .MuiInputBase-root': {
      marginTop: '10px',
      padding: '0 10px 0px ',
    },
    '& .Mui-focused ~ .MuiInputLabel-root': {
      transform: 'translate(0.3rem, -1.3rem) scale(0.75)',
      color: '#3F5FC8',
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
  onKeyDown:
    | ((
        event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => void)
    | undefined;

  onButtonClick:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const Skills: FC<SkillsProps> = ({
  value,
  onChange,
  onButtonClick,
  onKeyDown,
}) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} component="div">
        <InputBase
          value={value}
          fullWidth
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <InputLabel>skills</InputLabel>
        <Button onClick={onButtonClick}>add</Button>
      </Paper>
    </>
  );
};

export default Skills;
