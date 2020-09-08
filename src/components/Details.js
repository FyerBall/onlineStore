import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
function Details() {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          id,
          img,
          price,
          description,
          title,
          rate,
          inCart,
        } = value.detailProduct;
        return (
          <DetailsStyled className="details">
            <div className="details__left">
              <img src={img} alt={title} />
            </div>
            <div className="details__right">
              <h3>{title}</h3>
              <p className="description">{description}</p>
              <div className="details__footer">
                <p>
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
              <div className="card__cta">
                <button onClick={() => value.addToCart(id)}>
                  {inCart ? (
                    <p className="" disabled>
                      In cart
                    </p>
                  ) : (
                    <p>add to cart</p>
                  )}
                </button>
              </div>
            </div>
          </DetailsStyled>
        );
      }}
    </ProductConsumer>
  );
}

const DetailsStyled = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr));
  height: 100vh;
  align-items: center;

  img {
    width: 100%;
    height: 15rem;
    max-height: 15rem;
    object-fit: contain;
  }
  h3 {
    font-weight: 100;
    text-align: center;
    margin-top: 1rem;
  }
  .description {
    line-height: 2rem;
    margin: 5px 0;
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
  .card__rating {
    display: flex;
    p {
      margin: 0 2px;
    }
  }

  .details__footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .details__right {
    margin: 0 0 1rem;
  }
`;
export default Details;
