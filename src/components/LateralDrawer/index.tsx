import React, { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { AvatarBord, DivMenuOpen, DivRowMenu, LateralDrawerContainer, MenuIconsDiv } from './styles';
import userImage from '../../assets/img/User.jpg';
import homeIcon from '../../assets/icons/ic-home.svg';
import homeIconBlue from '../../assets/icons/ic-home-blue.svg';
import personIcon from '../../assets/icons/ic-person.svg';
import personIconBlue from '../../assets/icons/ic-person-blue.svg';
import carIcon from '../../assets/icons/ic-directions-car.svg';
import triangleIcon from '../../assets/icons/ic-vector-triangle.svg';
import walletIcon from '../../assets/icons/ic-account-balance-wallet.svg';
import logOut from '../../assets/icons/ic-power-settings-new.svg';
import { useHistory } from 'react-router-dom';

export function LateralDrawer() {
  const { push, location } = useHistory();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeIcon, setActiveIcon] = useState<number>();

  useEffect(() => {
    if (location.pathname === '/dashboard-template/') {
      setActiveIcon(1);
    } else if (location.pathname === '/dashboard-template/UserPage') {
      setActiveIcon(2);
    } else {
      setActiveIcon(0);
    }
  }, [location.pathname, push]);


  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <LateralDrawerContainer isOpen={isOpen} onClick={() => setIsOpen(true)}>
        <div style={{ display: "flex", alignItems: "flex-end", marginTop: "45px" }}>
          <AvatarBord>
            <img src={userImage} alt="Usuário" width="50px" height="50px" />
          </AvatarBord>
          <DivMenuOpen isOpen={isOpen}>
            <p>Vinicius Malara</p>
            <span><img src={logOut} alt="Sair" width="12px" height="12px" />Sair</span>
          </DivMenuOpen>
        </div>
        <MenuIconsDiv>
          <DivRowMenu isOpen={isOpen} selected={activeIcon === 1 && isOpen} onClick={() => {
            if (isOpen) {
              push('/dashboard-template/');
              setActiveIcon(1);
            }
          }}>
              {activeIcon === 1 ?
              <img src={homeIconBlue} alt="Icone de inicio" width="24px" height="24px" />
                : <img src={homeIcon} alt="Icone de inicio" width="24px" height="24px" />}
              <p>Início</p>
          </DivRowMenu>
          <DivRowMenu isOpen={isOpen} selected={activeIcon === 2  && isOpen} onClick={() => {
            if (isOpen) {
              push('/dashboard-template/UserPage');
              setActiveIcon(2);
            }
          }}>
              {(activeIcon === 2 && location.pathname === '/dashboard-template/UserPage') ?
              <img src={personIconBlue} alt="Icone de inicio" width="24px" height="24px" />
              : <img src={personIcon} alt="Icone de usuário" width="24px" height="24px" />}
            <p>Clientes</p>
          </DivRowMenu>
          <DivRowMenu isOpen={isOpen} selected={false}>
            <img src={carIcon} alt="Icone de Veículos" width="24px" height="24px" />
            <p>Veículos</p>
          </DivRowMenu>
          <DivRowMenu isOpen={isOpen} selected={false}>
            <img src={triangleIcon} alt="Icone de Triangulação" width="24px" height="24px" />
            <p>Triangulação</p>
          </DivRowMenu>
          <DivRowMenu isOpen={isOpen} selected={false}>
            <img src={walletIcon} alt="Icone de Financeiro" width="24px" height="24px" />
            <p style={{ opacity: "0.5" }}>Financeiro</p>
          </DivRowMenu>
        </MenuIconsDiv>
      </LateralDrawerContainer>
    </OutsideClickHandler>
  )
}
