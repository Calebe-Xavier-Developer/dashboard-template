import React from 'react';
import { FooterUser, HeaderContainer, MainContainer, SpanHeaderText, SpanMainText, SpanSmall, StatusDiv, UserElement, Checkbox } from './styles';
import arrowDownGray from '../../assets/icons/ic-arrow-drop-down-gray.svg';
import arrowLeft from '../../assets/icons/ic-chevron-left.svg';
import arrowRight from '../../assets/icons/ic-chevron-right.svg';
import tripleDots from '../../assets/icons/ic-more-vert.svg';
import { users } from '../../utils/arrays';

export const UserMain = () => {

  const userList = users.map(item => (
    <UserElement key={item.id}>
      <Checkbox></Checkbox>
      <SpanMainText>{item.name}</SpanMainText>
      <div>
        <StatusDiv status={item.status}>{item.status}</StatusDiv>
      </div>
      <SpanMainText>{item.tel}</SpanMainText>
      <SpanMainText>
        {item.email}
        <img src={tripleDots} alt="Triple Dots" width="24px" height="24px" />
      </SpanMainText>
    </UserElement>
  ));

  return (
    <>
      <HeaderContainer>
        <div></div>
        <SpanHeaderText>nome</SpanHeaderText>
        <SpanHeaderText>status</SpanHeaderText>
        <SpanHeaderText>Telefone</SpanHeaderText>
        <SpanHeaderText>e-mail</SpanHeaderText>
      </HeaderContainer>
      <MainContainer>
        {userList}
      </MainContainer>
      <FooterUser>
        <div>
          <SpanSmall>Itens por página:</SpanSmall>
          <p>10</p>
          <img src={arrowDownGray} alt="Icone de seta para baixo" width="24px" height="24px" />
          <SpanSmall>1-10 de 3.456</SpanSmall>
        </div>
        <div>
          <img src={arrowLeft} alt="Seta de página para a esquerda" width="24px" height="24px" />
          <img src={arrowRight} alt="Seta de página para a Direita" width="24px" height="24px" />
        </div>
      </FooterUser>
    </>
  )
}
