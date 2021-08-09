import styled from "styled-components";

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 32%;
  margin-left: 20px;

  max-height: 64.5vh;
  
  @media (max-width: 1496px){
    width: 31.5%;
    max-height: 56vh;
  }

  overflow-x: hidden;
  overflow-y: auto;

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
    border: 0px none #ffffff;
    border-radius: 0px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

export const IntentionDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 99.2%;
  height: 384px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid  rgba(0, 0, 0, 0.12);
  
  span{
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    color:rgba(0, 0, 0, 0.87);
    padding: 18px 20px 0;
    margin-bottom: 16px;
  }

`;

export const IntentionList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 20px;

  border-bottom: 1px solid #e0e0e0;

  &:last-child{
    border-bottom:none;
  }
`;

export const IntentionCol = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;

  &:nth-child(2){
    align-items: flex-end;
    margin-right: 38px;
  }
`;

export const IntentionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  
  img{
    margin-right: 10px;
    margin: 14px 10px 14px 0;
  }
`;

export const IntentionText = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  color:rgba(0, 0, 0, 0.87);
`;

export const GraphDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 99.2%;
  height: 226px;
  margin-top: 30px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid  rgba(0, 0, 0, 0.12);

`;

export const GraphCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span{
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    color:rgba(0, 0, 0, 0.87);
    padding: 18px 20px 0;
    margin-bottom: 16px;

    img{
      margin-left: 6px;
    }
  }
  svg{
    margin-left: 20px;
  }
`;

export const DataDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 37px;

  div{
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 10px;

    span{
      width: 8px;
      height: 8px;
      margin-right: 8px;
      border-radius: 50%;
    }
    p{
      display: flex;
      align-items: center;
      font-size: 12px;
      line-height: 12px;
      color: #a5abb7;
      margin: 0 0 0 6px;
    }
  }

`;

