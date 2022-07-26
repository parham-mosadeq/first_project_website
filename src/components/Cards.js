import React, { Component } from 'react';
import styles from './Cards.module.css';
import Card from './Card';
//importing photos
import iTen from '../images/i10.jpg';
import iTwe from '../images/i12.jpg';
import iThr from '../images/i13.jpg';
import gs22 from '../images/gs22.jpg';

class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card image={iTen} name='Iphone x' price={500} />
        <Card image={iTwe} name='Iphone 12' price={750} />
        <Card image={iThr} name='Iphone 13' price={1099} />
        <Card image={gs22} name='Galaxy S22' price={1097} />
      </div>
    );
  }
}

export default Cards;
