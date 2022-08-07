import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import ProductsDesc from './components/ProductsDesc';
const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          path='/product/:id'
          render={(props) => <ProductsDesc {...props} />}
        />
        <Route path='/about' component={AboutUs} />
        <Route path='/products' component={Products} />
        <Route path='/' component={LandingPage} />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
