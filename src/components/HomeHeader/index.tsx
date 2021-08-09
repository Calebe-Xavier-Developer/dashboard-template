import React from 'react';
import arrowUp from '../../assets/icons/ic-arrow-drop-down up.svg';
import arrowDown from '../../assets/icons/ic-arrow-drop-down.svg';
import carBlue from '../../assets/icons/ic-directions-car-blue.svg';
import devicesBlue from '../../assets/icons/ic-important-devices-blue.svg';
import moneyBlue from '../../assets/icons/ic-attach-money-blue.svg';
import { CardHeader, DivBigIcon, DivCol, DivRow, HeaderContainer } from './styles';

export const HomeHeader = () => {
  return (
    <HeaderContainer>
      <CardHeader>
        <DivCol>
          <p>Avaliações Hoje</p>
          <span>29</span>
          <DivRow>
            <img src={arrowUp} alt="Icone seta pra cima" width="24px" height="24px" />
            <span style={{ color: "#6200ee" }}>36%</span>
            <p>desde ontem</p>
          </DivRow>

        </DivCol>
        <DivCol>
          <DivBigIcon>
            <img src={carBlue} alt="Icone carro azul" width="32px" height="32px" />
          </DivBigIcon>
        </DivCol>
      </CardHeader>
      <CardHeader>
        <DivCol>
          <p>Carros Publicados</p>
          <span>397</span>
          <DivRow>
            <img src={arrowUp} alt="Icone seta pra cima" width="24px" height="24px" />
            <span style={{ color: "#6200ee" }}>4%</span>
            <p>este mês</p>
          </DivRow>

        </DivCol>
        <DivCol>
          <DivBigIcon>
            <img src={devicesBlue} alt="Icone equipamento azul" width="32px" height="32px" />
          </DivBigIcon>
        </DivCol>
      </CardHeader>
      <CardHeader>
        <DivCol>
          <p>Ticket Médio do estoque</p>
          <span style={{ color: "#fc4a40" }}>R$ 42.567</span>
          <DivRow>
            <img src={arrowDown} alt="Icone seta pra cima" width="24px" height="24px" />
            <span style={{ color: "#fc4a40" }} >6%</span>
            <p>este mês</p>
          </DivRow>

        </DivCol>
        <DivCol>
          <DivBigIcon>
            <img src={moneyBlue} alt="Icone dinehiro azul" width="32px" height="32px" />
          </DivBigIcon>
        </DivCol>
      </CardHeader>
    </HeaderContainer>
  )
}
