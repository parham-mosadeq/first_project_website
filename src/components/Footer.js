import React, { Component } from 'react';
import styles from './Css Components/Footer.module.css'

class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p>all rights &copy; reserved</p>
      </div>
    );
  }
}

export default Footer;