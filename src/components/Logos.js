import React, { Component } from 'react';
import styles from './Logos.module.css';

import sum from '../images/samsung.png';
import apple from '../images/apple.png';
import xia from '../images/xiaomi.png';

class Logos extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h3>who support us?</h3>
        <div className=''>
          <img src={sum} alt='logo' />
          <img src={apple} alt='logo' />
          <img src={xia} alt='logo' />
        </div>
      </div>
    );
  }
}

export default Logos;
