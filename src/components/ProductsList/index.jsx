import { Product } from "./Product";
import { StyledList } from "./style";

export const ProductsList = ({ products, addCart }) => {
  return (
    <StyledList className="container">
      {products.map((product) => {
        return <Product key={product.id} product={product} addCart={addCart} />;
      })}
    </StyledList>
  );
};
