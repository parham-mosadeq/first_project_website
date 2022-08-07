import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import styles from './Css Components/Products.module.css';
import ProductsDesc from './ProductsDesc';

class Products extends Component {
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
    const { products } = { ...this.state };
    if (products.length) {
      return (
        <div className={styles.container}>
          {/* map start */}
          {products.map((product, idx) => {
            const { id, title, image, price } = product;
            return (
              <>
                <Card
                  key={id}
                  id={id}
                  title={title}
                  image={image}
                  price={price}
                ></Card>
              </>
            );
          })}
          {/* map end */}
        </div>
      );
    } else {
      return <h1 className={styles.container}>Loading ....</h1>;
    }
  }
}

export default Products;
