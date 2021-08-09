import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 1;
  margin-right: 20px;
  justify-content: space-between;
  width: 33.3%;
  height: 110px;
  background-color: #fff;
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.12);
`;

export const DivCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  height: 100%;
  padding: 15px 20px 13px 20px;

  p{
    font-size: 10px;
    font-weight: 500;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.87);
    opacity: 0.5;
    text-transform: uppercase;

     @media (max-width: 1082px){
      font-size: 8px;
    }
  }
  span{
    font-size: 34px;
    line-height: 36px;
    color: rgba(0, 0, 0, 0.87);

    @media (max-width: 1082px){
      font-size: 20px;
    }
  }
  &:nth-child(even){
    align-items: flex-end;
    justify-content: center;
    width: 20%;
  }
`;

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;

  span{
    font-size: 12px;
    line-height: 16px;
    margin-right: 5px;

     @media (max-width: 1082px){
      font-size: 10px;
    }
  }
  p{
    font-size: 11px;
    line-height: 16px;
    opacity: 0.5;
    color: rgba(0, 0, 0, 0.87);
    text-transform: lowercase;

     @media (max-width: 1082px){
      font-size: 8px;
    }
  }
`;

export const DivBigIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #f3f7ff;
`;
