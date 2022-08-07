import React, { Component } from 'react';
import styles from './Css Components/Cards.module.css';
import Card from './Card';
import Products from './Products';
//importing photos
import iTen from '../images/i10.jpg';
import iTwe from '../images/i12.jpg';
import iThr from '../images/i13.jpg';
import gs22 from '../images/gs22.jpg';
import { Link, Route } from 'react-router-dom';

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      PhoneData: [
        { id: 1, image: iTen, name: 'Iphone X', price: 500 },
        { id: 2, image: iTwe, name: 'Iphone 12', price: 750 },
        {
          id: 3,
          image: iThr,
          name: 'Iphone 13',
          price: 1099,
        },
        { id: 4, image: gs22, name: 'Galaxy S22', price: 1097 },
      ],
    };
  }
  render() {
    const { PhoneData } = this.state;
    return (
      <div className={styles.container}>
        {PhoneData.map((item) => {
          const { image, name, price, id } = item;
          return (
            <Card key={id} image={image} name={name} price={price} id={id} />
          );
        })}
        <article className=''>
          <Link to='/products'>show more -</Link>
        </article>
      </div>
    );
  }
}

export default Cards;
