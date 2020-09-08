import React from "react";
import { ProductConsumer } from "../context";
function Cart() {
  return (
    <>
      <ProductConsumer>
        {(value) => (
          <span className="cart__counter">
            {value.cart.length === 0 ? (
              <h1>your cart is empty</h1>
            ) : (
              <h1>You have {value.cart.length} items in your cart</h1>
            )}
          </span>
        )}
      </ProductConsumer>
    </>
  );
}

export default Cart;
