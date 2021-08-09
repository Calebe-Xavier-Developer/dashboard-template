import styled from "styled-components";

export const DivCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const SubCol = styled.div`
  display: flex;
  flex-direction: column;
  &:nth-child(1){
    width: 65%;
  }
  &:nth-child(2){
    width: 35%;
  }

`;
