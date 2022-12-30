import React from "react";
import { OrderWrapper, Input, P, Price } from "./styled";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";

export function OrderBlock() {
  return (
    <OrderWrapper>
      <Title size={TitleSize.SMALL} level="2" mb={24}>
        Сделать заказ
      </Title>
      <Input type="text" placeholder="Введите адрес доставки" />
      <P>Цена</P>
      <Price>1200 руб.</Price>
      <Button width={310}>Купить</Button>
    </OrderWrapper>
  );
}
