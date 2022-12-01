import { StyledText } from "../../styles/typography";
import { StyledProduct } from "./style";

export const Product = ({ product, addCart }) => {
  return (
    <StyledProduct key={product.id}>
      <div className="container-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="container-info">
        <StyledText tag="h3" font="heading3" color="#333333">
          {product.name}
        </StyledText>
        <StyledText tag="p" font="caption" color="#828282">
          {product.category}
        </StyledText>
        <StyledText tag="p" font="body-600" color="#27ae60">
          R$ {product.price && product.price.toFixed(2)}
        </StyledText>
        <button
          type="button"
          className="button-colored-default"
          onClick={() => addCart(product.id)}
        >
          Adicionar
        </button>
      </div>
    </StyledProduct>
  );
};
