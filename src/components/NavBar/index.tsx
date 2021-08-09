import React from 'react';
import { NavDiv, NavBarContainer, TextLogo, IconDiv } from './styles';
import notificationIcon from '../../assets/icons/ic-notifications.svg';
import dryveLogo from '../../assets/icons/dryve-logo.svg';
import searchIcon from '../../assets/icons/ic-search.svg';

export const NavBar = () => {
  return (
    <NavBarContainer>
      <NavDiv>
         <img src={dryveLogo} alt="Icone de Notificação" width="101px" height="34px" />
        <TextLogo>backoffice</TextLogo>
      </NavDiv>
      <NavDiv>
        <IconDiv>
          <img src={searchIcon} alt="Icone de Busca" width="24px" height="24px" />
        </IconDiv>
        <img src={notificationIcon} alt="Icone de Notificação" width="24px" height="24px" />
      </NavDiv>
    </NavBarContainer>
  )
}
