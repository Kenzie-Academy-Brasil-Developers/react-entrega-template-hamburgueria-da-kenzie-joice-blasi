import { StyledText } from "../../styles/typography";
import { StyledForm } from "./style";

export const InputSearch = ({ showProducts, search, setSearch }) => {
  return (
    <StyledForm onSubmit={showProducts}>
      <input
        type="text"
        placeholder="Digitar pesquisa"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <StyledText
        tag="button"
        font="body-600"
        color="#FFFFFF"
        className="button-colored-default"
        type="submit"
      >
        Pesquisar
      </StyledText>
    </StyledForm>
  );
};
