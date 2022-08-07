import React from 'react';
import styles from './Css Components/Banner.module.css';
import bcg from '../images/bcg.jpg';
const Banner = () => {
  return (
    <div className={styles.container}>
      <img className={styles.banner} src={bcg} alt='banner' />
      <div className={styles.textContainer}>
        <h1>ShopMe</h1>
        <p>
          Let's <span> Buy :)</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
