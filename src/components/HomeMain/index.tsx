import React from 'react';
import arrowDownGray from '../../assets/icons/ic-arrow-drop-down-gray.svg';
import arrowRight from '../../assets/icons/ic-arrow-drop-right.svg';
import { cars } from '../../utils/arrays';
import { HeaderContainer, ParagraphMain, DivCol, DivRow, FooterContainer, ListContainer, SubDivCol, ImgBorder, ListCarsContainer, ParagraphList, DivWaiting, SectionContainer } from './styles';

export const HomeMain = () => {

  const carsList = cars.map(item => (
    <ListContainer key={item.id}>
      <SubDivCol>
        <ImgBorder>
          <img src={item.img} alt={item.name} width="80px" height="60px" />
        </ImgBorder>
      </SubDivCol>
      <SubDivCol>
        <span>{item.name}</span>
        <ParagraphList>{item.model}</ParagraphList>
        <ParagraphList>{`${item.year} - ${item.typeFuel}`}</ParagraphList>
        <ParagraphList>{`${item.exchange} - ${item.mileage}`}</ParagraphList>
      </SubDivCol>
      <SubDivCol>
        <ParagraphList>Anúncio</ParagraphList>
        <span>{item.price}</span>
        <ParagraphList>Mínimo Aceito</ParagraphList>
        <ParagraphList>{item.minPrice}</ParagraphList>
      </SubDivCol>
      <SubDivCol>
        <DivWaiting>Aguardando Precificação</DivWaiting>
        <ParagraphList>18/04/2020 às 14:35</ParagraphList>
      </SubDivCol>
    </ListContainer>
  ));

  return (
    <SectionContainer>
      <HeaderContainer>
        <DivCol>
          <span>Últimas avaliações</span>
          <ParagraphMain>Dados do Veículo</ParagraphMain>
        </DivCol>
        <DivCol>
          <DivRow>
            <span>Hoje</span>
            <img src={arrowDownGray} alt="Icone Seta para baixo" width="24px" height="24px" />
          </DivRow>
          <DivRow>
            <ParagraphMain>Valor</ParagraphMain>
            <ParagraphMain>Status</ParagraphMain>
          </DivRow>
        </DivCol>
      </HeaderContainer>
      <ListCarsContainer>
        {carsList}
      </ListCarsContainer>
      <FooterContainer>
        <p>Ver tudo</p>
        <img src={arrowRight} alt="Icone Seta para baixo" width="25px" height="25px" />
      </FooterContainer>
    </SectionContainer>
  )
}
