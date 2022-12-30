import React from "react";
import { StyledText, StyledPrice } from "./styled";

export function Description({ item }) {
  return (
    <>
      <StyledText>{item.description}</StyledText>
      <StyledPrice>{`${item.price} руб. / ${item.specifications.weight} гр.`}</StyledPrice>
    </>
  );
}
