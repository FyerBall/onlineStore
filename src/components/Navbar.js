import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { ProductConsumer } from "../context";

function Navbar() {
  return (
    <NavbarStyled>
      <Link to="/" className="logo">
        <h1>My shop</h1>
      </Link>
      <div className="navbar__container">
        <input
          type="text"
          className="navbar__search"
          placeholder="Search anything you want"
        />
        <Link to="/cart">
          <div className="navbar__cart">
            <ShoppingBasketIcon className="cart__icon" />
            <ProductConsumer>
              {(value) => (
                <span className="cart__counter">{value.cart.length}</span>
              )}
            </ProductConsumer>
          </div>
        </Link>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  height: 75px;

  @media (max-width: 798px) {
    .navbar__container {
      flex: 1;
    }
    .navbar__search {
      flex: 1;
      margin-right: 10px;
    }
  }
  .logo {
    flex: 1;
    text-transform: capitalize;
  }
  .navbar__container {
    display: flex;
    width: 30%;
    align-items: center;
    justify-content: space-between;
  }
  .navbar__search {
    width: 45%;
    max-width: 90%;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
  }
  .navbar__cart {
    display: flex;
    align-items: center;
  }
  .cart__counter {
    margin: 0 10px;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

export default Navbar;
