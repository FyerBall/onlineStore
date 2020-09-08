import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.setProducts();
  }
  // Getting  a fresh set of value
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };
  getDetails = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = (id) => {
    // temp product
    let tempProduct = [...this.state.products];
    // get the index of the item
    const index = tempProduct.indexOf(this.getItem(id));
    // Getting the product we are adding to the cart
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    // changing the total
    const price = product.price;
    product.total = price;
    // Change the value in the state
    this.setState(
      () => {
        return { products: tempProduct, cart: [...this.state.cart, product] };
      },
      () => console.log(this.state)
    );
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getDetails: this.getDetails,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
