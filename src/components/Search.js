import React, { Component } from 'react';
import styles from './Css Components/Search.module.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { text } = this.state;
    return (
      <div className={styles.container}>
        <p>Search what you want</p>
        <div>
          <input
            type='text'
            value={this.state.text}
            placeholder='search'
            onChange={this.handleChange}
          />
          <br />
          <br />
          <span>{text}</span>
        </div>
      </div>
    );
  }
}

export default Search;
