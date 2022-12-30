import React from "react";
import { ProductChooser } from "/src/components/ui/product-chooser/product-chooser";
import { PageWrapper } from "./styled";
import { OrderBlock } from "/src/components/ui/order-block/order-block";
import { ProductList } from "/src/components/ui/product-list/product-list";

export default function OrderPage({ products }) {
  return (
    <PageWrapper>
      <form>
        <ProductChooser products={products} />
        <OrderBlock />
      </form>
      <ProductList products={products} />
    </PageWrapper>
  );
}
