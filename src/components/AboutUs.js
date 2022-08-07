import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Comapnies from './Comapnies';
import Message from './Message';
import style from './Css Components/AboutUs.module.css';
class AboutUs extends Component {
  render() {
    return (
      <div className={style.header}>
        <div className={style.links}>
          <h3>
            <Link to='/about/companies'>Companies We Work With</Link>
          </h3>
          <h3>
            <Link to='/about/message'>Send a message</Link>
          </h3>
        </div>

        <Route path='/about/companies' component={Comapnies} />
        <Route path='/about/message' component={Message} />
      </div>
    );
  }
}

export default AboutUs;
