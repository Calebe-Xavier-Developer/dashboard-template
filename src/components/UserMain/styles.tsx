import styled from "styled-components";

interface StatusType {
  status: string,
}

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  border-radius: 4px 4px 0 0;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #fff;

  div{
    width: 18px;
    height: 18px;
    border-radius: 4px;
    margin: 0 29px 0 23px;
    border: 3px solid rgba(0, 0, 0, 0.38);
  }

`;

export const SpanHeaderText = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  opacity: 0.5;
  text-transform: uppercase;
  &:nth-child(2){
    min-width: 41%;
    @media (max-width: 1496px){
      min-width: 39%;
    }
  }
  &:nth-child(3){
    min-width: 15%;
  }
  &:nth-child(4){
    min-width: 15%;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 62vh;
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
    background: transparent;
    border-radius: 0px;
    border: none;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  @media (max-width: 1496px){
    max-height: 50vh;
  }
`;

export const UserElement = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 64px;
  background-color: #fff;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);

  span:nth-child(2){
    min-width: 40%;

    @media (max-width: 1496px){
      min-width: 38%;
    }
  }
  div:nth-child(3){
    min-width: 15%;
  }
  span:nth-child(4){
    min-width: 15%;
  }
  span:nth-child(5){
    display: flex;
    justify-content: space-between;
    min-width: 25%;
    img{
      margin-right: 30px;
    }
  }
`;

export const Checkbox = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  margin: 0 29px 0 23px;
  border: 3px solid rgba(0, 0, 0, 0.38);
`;

export const SpanMainText = styled.span`
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);

  &:nth-child(1){
    min-width: 280px;
  }
`;

export const StatusDiv = styled.div<StatusType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 26px;
  border-radius: 13px;
  background-color: ${props => (props.status === 'Lead' ? '#f6f6f6' : '#f3f7ff')};
  color: ${props => (props.status === 'Lead' ? '#666666' : '#0065ff')};
`;

export const FooterUser = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 54px;
  background-color: #fff;
  border-radius: 0 0 4px 4px;
  border: 1px solid rgba(0, 0, 0, 0.12);

  div{
    display: flex;
    align-items: center;
    margin-left: 21px;
    p{
      margin: 0 7px 0 0;
      font-size: 14px;
      line-height: 24px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.87);
    }
    img{
      margin-right: 10px;
    }
  }

`;

export const SpanSmall = styled.span`
  font-size: 11px;
  color: #a5abb7;
  margin-right: 7px;
`;
