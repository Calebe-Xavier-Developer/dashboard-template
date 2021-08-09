import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 65.4%;

  @media (max-width: 1496px){
    width: 65%;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 97px;
  background-color: #fff;

  border-radius: 4px 4px 0 0;
  border: 1px solid rgba(0, 0, 0, 0.12);
`;

export const DivCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
  max-height: 97px;
  padding: 18px 27px 19px 20px;

  span{
    font-size: 14px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.87);
  }
`;

export const SubDivCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 39%;
  max-height: 100px;
  &:nth-child(1){
    width: 10%;
    margin-right: 10px;
  }
  &:nth-child(2){
    span{
      font-size: 12px;
      line-height: 16px;
      font-weight: bold;
      color: #1e2c4c;
      text-transform: uppercase;
    }
  }
  &:nth-child(3){
    width: 16%;
    span{
      font-size: 12px;
      line-height: 12px;
      font-weight: bold;
      color: #1e2c4c;
    }
  }
    &:nth-child(4){
      width: 31%;
      justify-content: space-around;
      align-items: center;
  }
`;

export const ParagraphList = styled.p`
  font-size: 10px;
  line-height: 10px;
  color: #a5abb7;
  margin: 4px 0;
  text-transform: uppercase;
`;

export const ImgBorder = styled.div`
  width: 80px;
  height: 59px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
`;

export const ParagraphMain = styled.p`
  margin: 0;
  font-size: 10px;
  line-height: 1.6;
  opacity: 0.5;
  color: rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
`;

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  &:nth-child(1){
    justify-content: flex-end;
  }
  &:nth-child(2){
    justify-content: flex-start;
  }
  p:nth-child(1){
    margin-right: 110px;
  }
  span{
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
  }
`;

export const ListCarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 50vh;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 6px;
    height: 140px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0,0,0, 0.1);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 0px;
    border-right: 1px solid  rgba(0, 0, 0, 0.12);
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  @media (max-width: 1496px){
    max-height: 37vh;
  }
`;

export const DivWaiting = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 176px;
  height: 26px;
  border-radius: 13px;
  font-size: 12px;
  color: #768095;
  background-color: #f3f7ff;
`;

export const ListContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 18px 27px 19px 20px;
`;

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 37px;
  background-color: #fff;
  font-weight: 500;
  color: #0065ff;
  margin-bottom: 30px;

  border-radius: 0 0 4px 4px ;
  border: 1px solid rgba(0, 0, 0, 0.12);
  img{
    margin: 5px 24px 0 0;
  }
`;
