import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

import { Controller, Control } from 'react-hook-form';

const useStyles = makeStyles({
  formControl: {
    boxShadow: '2px 2px 2px 1px #D6D6D6, -1px -1px 1px #E6E6E6',
    background: 'white',
    borderRadius: 5,
    width: '100%',
    padding: 0,
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

const ITEM_HEIGHT = 68;
const ITEM_PADDING_TOP = 16;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const languages = [
  'English',
  'Mandarin Chinese',
  'Spanish',
  'French',
  'Standard Arabic',
  'Russian',
  'Turkish',
  'German',
  'Italian',
];

interface ISelectProps {
  control: Control<Record<string, any>>;
  onChange:
    | ((
        event: React.ChangeEvent<{
          name?: string | undefined;
          value: unknown;
        }>,
        child: React.ReactNode
      ) => void)
    | undefined;

  selectedLangs: string[];
}

const SelectWithController: FC<ISelectProps> = ({
  control,
  onChange,
  selectedLangs,
}) => {
  const classes = useStyles();

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Languages</InputLabel>
        <Controller
          render={() => (
            <Select
              label="languages"
              multiple
              fullWidth
              value={selectedLangs}
              input={<Input />}
              onChange={onChange}
              MenuProps={MenuProps}
              renderValue={(selected) => (selected as string[]).join(', ')}
            >
              {languages.map((lang) => (
                <MenuItem key={lang} value={lang}>
                  <Checkbox
                    color="primary"
                    checked={selectedLangs.indexOf(lang) > -1}
                  />
                  <ListItemText primary={lang} />
                </MenuItem>
              ))}
            </Select>
          )}
          name="languages"
          control={control}
          multiple
        />
      </FormControl>
    </>
  );
};

export default SelectWithController;
