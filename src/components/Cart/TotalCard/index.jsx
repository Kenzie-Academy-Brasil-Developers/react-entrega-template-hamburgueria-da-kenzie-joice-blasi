import { StyledText } from "../../styles/typography";
import { StyledTotal } from "./style";

export const TotalCard = ({ currentSale, removeAll }) => {
  const totalValue = () => {
    return currentSale.reduce((acc, product) => {
      return acc + product.amount * product.price;
    }, 0);
  };

  return (
    <StyledTotal>
      <div className="container-info">
        <StyledText tag="p" font="body-600" color="#333333">
          Total
        </StyledText>
        <StyledText tag="p" font="body-600" color="#828282">
          R$ {totalValue().toFixed(2)}
        </StyledText>
      </div>
      <button type="button" onClick={() => removeAll()}>
        Remover todos
      </button>
    </StyledTotal>
  );
};
