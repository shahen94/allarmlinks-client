import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './Farewell.module.scss';

function Farewell() {
  return (
    <div className={styles.farewell}>
      <div className={styles.farewell__message}>
        <img
          className={styles.farewell__image}
          src="flag.png"
          alt="armenian flag"
        />
        <Typography
          className={styles.farewell__mainText}
          variant="h5"
          component="h2"
        >
          Thank you for your registration
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          className={styles.farewell__secText}
        >
          We will contact you
        </Typography>
      </div>
    </div>
  );
}

export default Farewell;
