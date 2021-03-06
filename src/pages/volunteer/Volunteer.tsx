import { useHistory } from 'react-router-dom';
import React, { FC, useEffect, useState, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import axios from 'axios';

import './volunteer.scss';

import InputWithIcon from '../../components/FormElements/InputWithIcon/InputWithIcon';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

import SubmitButton from '../../components/FormElements/SubmitButton';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Skills from '../../components/FormElements/Skills/Skills';
import CustomField from '../../components/FormElements/CustomFIeld/CustomField';
import {
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../../components/Icons/SocialIcons';
import SelectInput from '../../components/FormElements/SelectInput/SelectInput';
import AvailableHours from '../../components/FormElements/AvailableHours/AvailableHours';
import DatePicker from '../../components/FormElements/DataPicker/DatePicker';

const REACT_APP_URL_REGISTER = process.env.REACT_APP_URL_REGISTER;

type FromTo = {
  from: string;
  to: string;
};

const Volunteer: FC = () => {
  /* STORE */
  const token = useSelector((state: RootState) => state.token);

  /* router */
  const history = useHistory();

  /* local state */

  const [newSkill, setNewSkill] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [selectedLangs, setSelectedLangs] = React.useState<string[]>([]);
  const [fromTo, setFromTo] = useState<FromTo>({ from: '', to: '' });
  const [listOfSkills, setListOFSkills] = useState<string[]>([]);

  /* FORM */

  const { register, handleSubmit, setValue, errors, control } = useForm();

  /* SKILLS */

  const handleSkillChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setNewSkill(e.target.value);
  };
  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const set: Set<string> = new Set(listOfSkills);
      set.add(newSkill.toLowerCase());
      if (newSkill.trim() !== '') {
        setListOFSkills((state) => Array.from(set));
        setNewSkill('');
        setValue('addedTags', [...listOfSkills, newSkill]);
      }
    }
  };

  const handleDeleteFromList = (skill: string) => () => {
    setListOFSkills((state) => state.filter((el) => el !== skill));
  };

  const handleAddSkills = () => {
    if (newSkill.trim() !== '') {
      setListOFSkills((state) => [...state, newSkill]);
      setNewSkill('');
      setValue('addedTags', [...listOfSkills, newSkill]);
    }
  };

  /* LANGUAGES */

  const handleSelectInputChange = (event: any) => {
    setSelectedLangs(event.target.value as string[]);
    setValue('languages', event.target.value);
  };

  /* AVAILABLE HOURS */
  const handleFromChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFromTo((state) => ({ ...state, from: e.target.value }));
    setValue('hoursPerWeek', { ...{ ...fromTo, from: e.target.value } });
  };

  const handleToChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFromTo((state) => ({ ...state, to: e.target.value }));

    setValue('hoursPerWeek', { ...{ ...fromTo, to: e.target.value } });
  };

  /* SUBMIT */

  const onSubmit = (data: any) => {
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    data.birthDate = data.birthDate.toLocaleString('En-us', dateOptions);

    axios
      .post(`${REACT_APP_URL_REGISTER}${token}`, data)
      .then((res) => {
        if (res.data.status === 'finished') {
          history.push('/farewell');
        } else {
          if (res.data.error) {
            throw new Error(res.data.error);
          }
        }
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  useEffect(() => {
    register({ name: 'addedTags' });
    register({ name: 'hoursPerWeek' });
  }, [register]);

  return (
    <div className={'wrapper'}>
      <div className="volunteer">
        <Typography style={{ margin: '1rem' }} variant="h5" component="h2">
          Additional Information
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="formFields">
            <div className="formColumn">
              <DatePicker
                error={errors.birthDate ? true : false}
                control={control}
              />
              <CustomField
                name={'country'}
                inputRef={register({ required: true })}
                label={'*Country'}
                error={errors.country ? true : false}
              />
              <CustomField
                name={'city'}
                inputRef={register({ required: true })}
                label={'*City'}
                error={errors.city ? true : false}
              />
              <CustomField
                name={'address'}
                inputRef={register()}
                label={'Address'}
              />
              <CustomField
                name={'specialization'}
                inputRef={register()}
                label={'Industry of Specialization'}
              />
              <CustomField
                name={'currentEmployerName'}
                inputRef={register()}
                label={'Current employer name'}
              />
              <CustomField
                name={'occupation'}
                inputRef={register()}
                label={'Occupation'}
              />
              <SelectInput
                onChange={handleSelectInputChange}
                selectedLangs={selectedLangs}
                control={control}
              />
            </div>
            <div className="formColumn">
              <AvailableHours
                handleFromChange={handleFromChange}
                handleToChange={handleToChange}
                valueForFrom={fromTo.from}
                valueForTo={fromTo.to}
              />
              <CustomField
                inputRef={register()}
                name="whereToVolunteer"
                label="Where do you prefer to volunteer"
              />

              <InputWithIcon
                name="facebookProfile"
                inputRef={register()}
                label="Facebook profile URL"
              >
                <FacebookIcon />
              </InputWithIcon>
              <InputWithIcon
                name="linkedinProfile"
                inputRef={register()}
                label="LinkedIn profile URL"
              >
                <LinkedInIcon />
              </InputWithIcon>
              <InputWithIcon
                name="twitterProfile"
                inputRef={register()}
                label="Twitter Profile URL"
              >
                <TwitterIcon />
              </InputWithIcon>

              <CustomField
                inputRef={register()}
                name="other"
                label="Other information"
              />

              <Skills
                onButtonClick={handleAddSkills}
                onKeyPress={handleKeyPress}
                onChange={handleSkillChange}
                value={newSkill}
              />
              <Box
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                {listOfSkills.map((skill) => (
                  <div
                    style={{ textTransform: 'capitalize' }}
                    key={skill}
                    className={'skill'}
                  >
                    {skill}
                    <span onClick={handleDeleteFromList(skill)}>&#x292B;</span>
                  </div>
                ))}
              </Box>
            </div>
          </div>
          <ErrorMessage>
            {error
              ? error
              : errors.country || errors.city || errors.birthDate
              ? 'Please fill in the required fields'
              : null}
          </ErrorMessage>
          <SubmitButton>Finish</SubmitButton>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
