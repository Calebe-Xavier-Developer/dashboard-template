import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 70px;
  max-height: 70px;
  background-color: #fff;
  box-shadow: 0 1px 0 0 #e0e0e0;
  position: relative;
`;

export const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  &:nth-child(1){
    width: 80%;
    margin-left: 110px;
  }
  &:nth-child(2){
    width: 20%;
    justify-content: flex-end;
    margin-right: 34px;
  }
`;

export const TextLogo = styled.span`
  text-transform: uppercase;
  color: #a5abb7;
  font-size: 10px;
  font-weight: 500;
  margin: 0 0 8px 7px;
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 27px;
`;
