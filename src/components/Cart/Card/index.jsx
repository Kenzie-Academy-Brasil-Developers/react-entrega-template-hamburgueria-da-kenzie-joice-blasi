import { StyledText } from "../../styles/typography";
import { StyledCard, StyledCartEmpty } from "./style";

export const Card = ({ currentSale, removeCart }) => {
  return currentSale.length ? (
    currentSale.map((product) => {
      return (
        <StyledCard key={product.id}>
          <div>
            <div className="container-image">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="container-info">
              <StyledText tag="p" font="heading3" color="#333333">
                {product.name}
              </StyledText>
              <StyledText tag="p" font="caption" color="#828282">
                {product.category}
              </StyledText>
              <StyledText tag="p" font="caption" color="#828282">
                Quantidade: {product.amount}
              </StyledText>
            </div>
          </div>
          <div className="container-button">
            <button
              type="button"
              className="button-grey-default"
              onClick={() => removeCart(product.id)}
            >
              Remover
            </button>
          </div>
        </StyledCard>
      );
    })
  ) : (
    <StyledCartEmpty>
      <StyledText tag="h3" font="heading3" color="#333333">
        Sua sacola está vazia
      </StyledText>
      <StyledText tag="p" font="body" color="#828282">
        Adicione itens
      </StyledText>
    </StyledCartEmpty>
  );
};
