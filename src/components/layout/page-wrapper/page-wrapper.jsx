import React from "react";
import Footer from "/src/components/layout/footer/footer";
import Header from "/src/components/layout/header/header";
import { MainWrapper } from "./styled";
import OrderPage from "/src/components/pages/order-page/order-page";

export default function PageWrapper({ products }) {
  return (
    <>
      <Header />
      <MainWrapper>
        <OrderPage products={products} />
      </MainWrapper>
      <Footer />
    </>
  );
}
