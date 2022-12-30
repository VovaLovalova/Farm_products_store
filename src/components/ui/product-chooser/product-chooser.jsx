import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Label, Checkbox, ChooserWrapper, StyledItem, P } from "./styled";

export function ProductChooser({ products }) {
  return (
    <ChooserWrapper>
      <Title size={TitleSize.SMALL} level="2" mb={27}>
        Выберите продукты
      </Title>
      {products.length ? (
        <ul>
          {products.map((item) => (
            <StyledItem key={item.id}>
              <Label htmlFor={item.name}>{item.title}</Label>
              <Checkbox type="checkbox" id={item.name} />
            </StyledItem>
          ))}
        </ul>
      ) : (
        <P>Продукты были слишком вкусными и их разобрали</P>
      )}
    </ChooserWrapper>
  );
}
