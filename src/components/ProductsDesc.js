import React, { Component } from 'react';
import axios from 'axios';
import styles from './Css Components/ProductsDesc.module.css';

class ProductsDesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios('https://fakestoreapi.com/products').then((res) =>
      this.setState({
        products: res.data,
      })
    );
  }

  render() {
    const mainId = +this.props.match.url.slice(-1);
    const { products } = this.state;
    if (products.length) {
      return (
        <div className={styles.wrapper}>
          {products.map((product) => {
            const { id, title, image, price, category, description, rating } =
              product;
            if (mainId === id) {
              return (
                <section className={styles.container} key={id}>
                  <h2 className={styles.category}>{category}</h2>
                  <div>
                    <img src={image} alt={title} />
                  </div>
                  <div className={styles.infoContainer}>
                    <h2>{title}</h2>
                    <h4>{price}$</h4>
                    <p>{description}</p>
                  </div>
                  <div className={styles.rating}>
                    <p>
                      {rating.count} <span>👥</span>
                    </p>
                    <p>
                      {rating.rate} <span>⭐</span>
                    </p>
                  </div>
                </section>
              );
            } else {
              return [];
            }
          })}
        </div>
      );
    } else {
      <h2>Loading ....</h2>;
    }
  }
}

export default ProductsDesc;
