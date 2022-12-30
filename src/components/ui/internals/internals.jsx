import React from "react";
import { StyledText } from "./styled";

export function Internals({ item }) {
  return (
    <>
      <StyledText>
        <b>Энергетическая ценность:</b> {item.internals.energyValue}
      </StyledText>
      <StyledText>
        <b>Пищевая ценность:</b> {item.internals.nutritionalValue}
      </StyledText>
    </>
  );
}
