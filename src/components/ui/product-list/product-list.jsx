import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { ProductSwiper } from "./styled";
import { ProductCard } from "/src/components/ui/product-card/product-card";

export function ProductList({ products }) {
  return <ProductCard products={products} />;
}
