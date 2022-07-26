import React from 'react';
import styles from './Banner.module.css';
import bcg from '../images/bcg.jpg';
const Banner = () => {
  return (
    <div className={styles.container}>
      <img className={styles.banner} src={bcg} alt='banner' />
      <div className={styles.textContainer}>
        <h1>botostart</h1>
        <p>
          we're learning <span>React js.</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
