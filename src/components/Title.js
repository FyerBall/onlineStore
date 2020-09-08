import React from "react";
import styled from "styled-components";

function Title({ title }) {
  return (
    <TitleStyled className="title">
      <h2 className="title__title">{title}</h2>
    </TitleStyled>
  );
}

const TitleStyled = styled.div`
  margin: 1rem 0;
  padding: 1rem 0;

  .title__title {
    text-transform: uppercase;
  }
`;

export default Title;
