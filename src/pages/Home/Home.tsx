import React from 'react';
import { useHistory } from 'react-router-dom';
import SubmitButton from '../../components/FormElements/SubmitButton';
import Typography from '@material-ui/core/Typography';
import styles from './Home.module.scss';

function Home() {
  const history = useHistory();
  const handleRedirect: () => void = () => {
    history.push('/registration/email');
  };

  return (
    <div className={styles.home}>
      <div className={styles.home__message}>
        <img
          className={styles.home__image}
          src="flag.png"
          alt="armenian flag"
        />
        <Typography
          className={styles.home__text}
          color="textSecondary"
          variant="h5"
          component="h2"
        >
          Support Armenia and Artsakh
        </Typography>
        <SubmitButton onClick={handleRedirect}>Register</SubmitButton>
      </div>
    </div>
  );
}

export default Home;
