import { StyledText } from "../styles/typography";
import { Card } from "./Card";
import { StyledCart } from "./style";
import { TotalCard } from "./TotalCard";

export const Cart = ({ currentSale, removeCart, removeAll }) => {
  const totalItens = () => {
    return currentSale.reduce((acc, product) => {
      return acc + product.amount;
    }, 0);
  };

  return (
    <StyledCart className="container">
      <div className="container-title">
        <StyledText tag="h3" font="heading3" color="#FFFFFF">
          Carrinho de compras ({totalItens()})
        </StyledText>
      </div>
      <div className="container-cart">
        <ul>
          <Card currentSale={currentSale} removeCart={removeCart} />
        </ul>
        {currentSale.length ? (
          <TotalCard currentSale={currentSale} removeAll={removeAll} />
        ) : (
          ""
        )}
      </div>
    </StyledCart>
  );
};
