import React, { Component } from 'react';
import styles from './Css Components/Card.module.css';

import down from '../images/down.svg';
import up from '../images/up.svg';
import { Link } from 'react-router-dom';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleUp = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDown = () => {
    this.setState(
      {
        count: this.state.count - 1,
      },
      () => {
        if (this.state.count <= 0) {
          this.setState({
            count: 0,
          });
        }
      }
    );
  };

  render() {
    const { count } = this.state;
    const { title, image, price, id } = this.props;
    return (
      <div className={styles.container}>
        <img src={image} alt={title} />
        <h3>
          <Link to={`/product/${id}`}>{title}</Link>
        </h3>
        <p>
          {price}
          {count ? `  * ${count} = ${count * price}` : null}$
        </p>
        <div className={styles.counter}>
          <img
            className={this.state.count || styles.deactive}
            src={down}
            alt='down flash arrow'
            onClick={this.handleDown}
          />
          <span>{count}</span>
          <img src={up} alt='up flash arrow' onClick={this.handleUp} />
        </div>
      </div>
    );
  }
}

export default Card;
