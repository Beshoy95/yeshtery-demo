import React, { Component } from 'react';
import {
  Header,
  Navbar,
  Banner,
  Path,
  Home,
  Footer,
} from './../components/index';

class Men extends Component {
  state = {
    products: [],
    similarProducts: [],
    selectedproduct: [],
  };
  componentDidMount() {
    this.getProducts();
    this.getMainProducts();
    let data = JSON.parse(localStorage.getItem('cart'));
    if (data !== null) {
      this.setState({ selectedproduct: data });
    }
  }

  async getProducts() {
    const res = await fetch('http://localhost:5000/similarProducts');
    const data = await res.json();
    this.setState({ similarProducts: data });
  }

  async getMainProducts() {
    const res = await fetch('http://localhost:5000/mainProducts');
    const data = await res.json();
    this.setState({ products: data });
  }

  handleIncrement = (item) => {
    let itemExist = this.state.selectedproduct.find(
      (elem) => elem.id === item.id
    );
    if (itemExist) {
      let cart = this.state.selectedproduct.map((elem) =>
        elem.id === item.id
          ? { ...itemExist, quantity: itemExist.quantity + 1 }
          : elem
      );
      this.setState({ selectedproduct: cart });
      this.addToLocalStorage(cart);
    } else {
      let cart = [...this.state.selectedproduct, item];
      this.setState({ selectedproduct: cart });
      this.addToLocalStorage(cart);
    }
  };

  handleDecrement = (item) => {
    let itemExist = this.state.selectedproduct.find(
      (elem) => elem.id === item.id
    );
    if (itemExist.quantity > 0) {
      let cart = this.state.selectedproduct.map((elem) =>
        elem.id === item.id
          ? { ...itemExist, quantity: itemExist.quantity - 1 }
          : elem
      );
      this.setState({ selectedproduct: cart });
      this.addToLocalStorage(cart);
    }
  };

  addToLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data));
  };

  render() {
    let totalQuantity = this.state.selectedproduct.reduce(
      (x, y) => x + y.quantity,
      0
    );
    let totalPrice = this.state.selectedproduct.reduce(
      (x, y) => x + y.quantity * y.price,
      0
    );
    return (
      <div>
        <Header />
        <Navbar
          selectedproduct={this.state.selectedproduct}
          totalQuantity={totalQuantity}
          totalPrice={totalPrice}
          handleIncrement={this.state.handleIncrement}
        />
        <Banner />
        <Path />
        <Home
          data={this.state}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          totalQuantity={totalQuantity}
        />
        <Footer />
      </div>
    );
  }
}

export default Men;
