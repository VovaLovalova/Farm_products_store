import React, { useState } from "react";
import { CardWrapper, Button, ButtonWrapper, ListItem } from "./styled";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Tabs } from "/src/components/ui/tabs/tabs";

export function ProductCard({ products }) {
  const [activeTab, setActiveTab] = useState(0);
  let isActiveDesc = true;
  let isActiveSpec = false;
  let isActiveInt = false;
  const handlerBuy = (event) => {
    if (event.currentTarget.innerText === "Описание") {
      setActiveTab(0);
    }
    if (event.currentTarget.innerText === "Характеристики") {
      setActiveTab(1);
    }
    if (event.currentTarget.innerText === "Свойства") {
      setActiveTab(2);
    }
  };

  return (
    <>
      {products.length ? (
        <ul>
          {products.map((item, index) => (
            <ListItem key={item.id}>
              <CardWrapper>
                <img src={item.src} alt={item.name} width="248" height="248" />
                <div>
                  <Title size={TitleSize.STANDART} level="3" mb={16}>
                    {item.title}
                  </Title>
                  <ButtonWrapper>
                    <Button onClick={handlerBuy} isActive={isActiveDesc}>
                      Описание
                    </Button>
                    <Button onClick={handlerBuy} isActive={isActiveSpec}>
                      Характеристики
                    </Button>
                    <Button onClick={handlerBuy} isActive={isActiveInt}>
                      Свойства
                    </Button>
                  </ButtonWrapper>
                  <Tabs item={item} activeTab={activeTab} />
                </div>
              </CardWrapper>
            </ListItem>
          ))}
        </ul>
      ) : null}
    </>
  );
}
