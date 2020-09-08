import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <HeroStyled className="hero">
      <div className="hero__container">
        <h3 className="hero__title">Winter On!</h3>
        {/* <Link to="/" className="hero__cta">
          Shop now
        </Link> */}
      </div>
    </HeroStyled>
  );
}

const HeroStyled = styled.div`
  margin-top: 2rem;
  background: url("https://cdn.pixabay.com/photo/2016/03/27/19/31/fashion-1283863_1280.jpg");
  height: 70vh;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
  width: 100%;

  &:after {
    background-color: rgba(62, 92, 135, 0.7);
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }

  .hero__container {
    display: flex;
    flex-direction: column;
    height: inherit;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    z-index: 2;
  }
  .hero__title,
  .hero__cta {
    color: white;
    font-family: $font-sans-serif;
    font-size: 19px;
    font-weight: bold;
    letter-spacing: 6px;

    text-transform: uppercase;

    padding: 20px 30px;
    border-radius: 1rem;
  }

  .hero__title {
    // background: #bbe1fa;
  }
  .hero__cta {
    background: #1b262c !important;
  }
`;

export default Hero;
