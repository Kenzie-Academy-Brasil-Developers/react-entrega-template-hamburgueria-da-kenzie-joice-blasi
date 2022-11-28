import spinner from "../../assets/spinner.png";
import { StyledLoading } from "./style.js";

export const Loading = () => {
  return (
    <StyledLoading>
      <img src={spinner} alt="Carregando" />
    </StyledLoading>
  );
};
