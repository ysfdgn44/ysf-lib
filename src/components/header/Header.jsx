import React from "react";
import {
  HeaderButton,
  HeaderContainer,
  HeaderForm,
  HeaderTitle,
  SearchInput,
  SelectBox,
} from "./Header.style";

const Header = ({ setQuery, setSelectType, getData }) => {
  const printType = ["all", "books", "magazines"];
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <HeaderTitle>books or magazines</HeaderTitle>
      <HeaderForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="name"
          required
          onChange={(e) => setQuery(e.target.value)}
        />
        <SelectBox onChange={(e) => setSelectType(e.target.value)}>
          {printType.map((type) => {
            return (
              <option key={type} value={type}>
                {type}
              </option>
            );
          })}
        </SelectBox>
        <HeaderButton type="submit">search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;
