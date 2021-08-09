import styled from 'styled-components';

interface LateralDrawerProps {
  isOpen: boolean,
}
interface LateralMenuProps {
  isOpen: boolean,
  selected: boolean,
}

export const LateralDrawerContainer = styled.div<LateralDrawerProps>`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.isOpen ? 'flex-start' : 'center')};
  width: ${props => (props.isOpen ? '240px' : '80px')};
  padding: ${props => (props.isOpen ? '15px' : '0')};
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 2;
  cursor: pointer;
  background-color: #ffffff;
  box-shadow: 1px 0 0 0 #e0e0e0;
  transition: width 0.5s ease-in-out;
`;

export const AvatarBord = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #0065ff;
  background-color: #d8d8d8;
  img{
    border-radius: 50%;
  }
`;

export const MenuIconsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 38px;
`;

export const DivMenuOpen = styled.div<LateralDrawerProps>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  margin: 0 0 10px 18px;
  p{
    margin: 0 0 5px 0;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
  }
  span{
    display: flex;
    align-items:center;
    font-size: 10px;
    line-height: 10px;
    font-weight: 500;
    opacity: 0.5;
    color: rgba(0, 0, 0, 0.87);
    text-transform: uppercase;
    img{
      margin-right: 5px;
    }
  }

`;

export const DivRowMenu = styled.div<LateralMenuProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  ${props => props.isOpen && `
    width: 90%;
    height: 40px;
    padding-left: 15px;
    justify-content: flex-start;
    img{
      margin-right: 25px;
    }
  `};
  margin-bottom: ${props => props.isOpen ? '5px' : '28px'};
  border-radius: 4px;
  background-color: ${props => props.selected ? '#f3f7ff' : 'transparent'};
  p{
    display: ${props => props.isOpen ? 'flex' : 'none'};
    margin: 0;
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    color: ${props => props.selected ? '#0065ff' : 'rgba(0, 0, 0, 0.87)'};
  }

`;