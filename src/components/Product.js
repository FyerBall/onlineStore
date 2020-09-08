import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import AddBoxIcon from "@material-ui/icons/AddBox";

function Product(props) {
  const { id, title, img, price, inCart, rate } = props.item;
  console.log(id);
  console.log(title);
  console.log(img);
  console.log(price);
  console.log(inCart);
  console.log(rate);

  return (
    <ProductStyled className="product">
      <div className="card__container">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <>
                <Link to="/details" onClick={() => value.getDetails(id)}>
                  <img src={img} alt={title} />
                </Link>

                <h3 className="card__title">{title}</h3>
              </>
            )}
          </ProductConsumer>

          <div className="card__footer">
            <div className="card__info">
              <p className="card__price">
                $<strong>{price}</strong>
              </p>
              <div className="card__rating">
                {Array(rate)
                  .fill()
                  .map((_, idx) => (
                    <p key={idx}>⭐️</p>
                  ))}
              </div>
            </div>
            <ProductConsumer>
              {(value) => (
                <div className="card__cta">
                  <button
                    onClick={() => {
                      value.addToCart(id);
                    }}
                  >
                    {inCart ? (
                      <p className="" disabled>
                        Added to card
                      </p>
                    ) : (
                      <p>add to cart</p>
                    )}
                  </button>
                </div>
              )}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  margin-bottom: 2rem;
  .card__container {
    // background: red;
    height: 100%;
  }
  .card {
    //
  }
  .card__title {
    font-weight: 100;
    text-align: center;
    margin-top: 1rem;
  }

  .card__info {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2rem;
  }
  .card__price {
  }
  .card__rating {
    display: flex;
    p {
      margin: 0 2px;
    }
  }

  img {
    width: 100%;
    height: 15rem;
    max-height: 15rem;
    object-fit: contain;
  }
  .card__cta {
    display: flex;
    align-items: center;
  }
  .card__cta button {
    width: 80%;
    margin: 1rem auto 0;
    letter-spacing: 6px;
    text-transform: uppercase;
    padding: 8px 30px;
    border-radius: 1rem;
    color: black;
    font-size: 14px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    box-shadow: 0px 3px 5px black;

    &:hover {
      box-shadow: 0px 2px 3px black;
    }
  }
`;
export default Product;
