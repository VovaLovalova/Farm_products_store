import React from "react";
import StyledButton from "./style";

export default function Button({ children, link, width }) {
  return (
    <StyledButton
      {...(link ? { as: "a", href: link } : { as: "button", type: "button" })}
      width={width}
    >
      {children}
    </StyledButton>
  );
}
