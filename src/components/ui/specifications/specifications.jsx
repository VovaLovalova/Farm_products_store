import React from "react";
import { StyledText } from "./styled";

export function Specifications({ item }) {
  return (
    <>
      <StyledText>
        <b>Масса:</b> {`${item.specifications.weight} гр.`}
      </StyledText>
      <StyledText>
        <b>Срок годности:</b> {item.specifications.expirationDate}
      </StyledText>
      <StyledText>
        <b>Порода:</b> {item.specifications.breed}
      </StyledText>
      <StyledText>
        <b>Место происхождения:</b> {item.specifications.placeOfOrigin}
      </StyledText>
    </>
  );
}
