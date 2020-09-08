import React from "react";
import Hero from "./Hero";
import Title from "./Title";
import Product from "./Product";
import styled from "styled-components";
import { ProductConsumer } from "../context";
function ProductList() {
  return (
    <div>
      <Hero />
      <Title title="featured products" />
      {/* <Product />
      hey from ProductList.js */}
      <ProductListStyled>
        <ProductConsumer>
          {(value) =>
            value.products.map((item) => <Product key={item.id} item={item} />)
          }
        </ProductConsumer>
      </ProductListStyled>
    </div>
  );
}

const ProductListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;
export default ProductList;
