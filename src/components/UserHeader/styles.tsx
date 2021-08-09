import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;

export const FilterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 106px;
  height: 36px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  cursor: pointer;
    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 18px;
      height: 12px;
      margin-right: 6.3px;
      span{
        height: 2.5px;
        background-color: #0065ff;
      }
      span:nth-child(1){
        width: 100%;
      }
      span:nth-child(2){
        width: 75%;
      }
      span:nth-child(3){
        width: 25%;
      }
    }
  span{
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    color: #6200ee;
    text-transform: uppercase;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 372px;
  height: 36px;
  padding: 0 16px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.38);
  background-color: #fff;
  span{
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const AddUserButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 36px;
  border-radius: 4px;
  background-color: #6200ee;
  cursor: pointer;
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    margin-right: 7.1px;
    span{
      background-color: #fff;
    }
    span:nth-child(1){
      position: relative;
      width: 14px;
      height: 2px;
    }
    span:nth-child(2){
      position: absolute;
      width: 2px;
      height: 14px;
    }
  }
  span{
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    text-transform: uppercase;
    color: #fff;
  }

`;
