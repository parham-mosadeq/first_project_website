import React from 'react';
import styles from './Css Components/Navbar.module.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
      <div className={styles.logo}>
        <img className={styles.logo} src={logo} alt='logo phone store' />
      </div>
    </header>
  );
};

export default Navbar;
