import { GlobalStyle } from "./styles";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import products from "/src/mocks/products";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <PageWrapper products={products} />
    </div>
  );
}
