import logo from "../../assets/logo.svg";
import { InputSearch } from "./InputSearch";
import { StyledHeader } from "./style";

export const Header = ({ showProducts, search, setSearch, clickLogo }) => {
  return (
    <StyledHeader>
      <div className="container">
        <img src={logo} alt="Logo Burguer Kenzie" onClick={() => clickLogo()} />
        <InputSearch
          showProducts={showProducts}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </StyledHeader>
  );
};
