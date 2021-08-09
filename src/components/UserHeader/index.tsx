import React from 'react';
import { AddUserButton, FilterDiv, HeaderContainer, SearchBar } from './styles';
import searchIcon from '../../assets/icons/ic-search-black.svg';
import { useHistory } from 'react-router-dom';

export const UserHeader = () => {
  const { push } = useHistory();
  return (
    <HeaderContainer>
      <div style={{ display: "flex", flexDirection: "row", alignItems: 'center'}}>
        <FilterDiv>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span>Filtrar</span>
        </FilterDiv>
        <SearchBar>
          <span>Buscar por nome...</span>
          <img src={searchIcon} alt="Icone de Busca" width="17px" height="17px" />
        </SearchBar>
      </div>
      <AddUserButton onClick={() => push('/ToAddClient')}>
        <div>
          <span></span>
          <span></span>
        </div>
        <span>Adicionar</span>
      </AddUserButton>
      
    </HeaderContainer>
  )
}
