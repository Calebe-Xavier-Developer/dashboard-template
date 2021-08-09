import styled from "styled-components";

interface optionType {
  selected: boolean,
}
interface inputType {
  active: boolean,
  width: string,
}

export const TitleAdd = styled.h1`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 22px;
`;

export const HeaderAdd = styled.header`
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 4px 4px 0 0;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #fff;
`;

export const OptionHeader = styled.div<optionType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.33%;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
  color: ${props => (props.selected ? '#6200ee' : 'rgba(0, 0, 0, 0.38)')};
  ${props => (props.selected && `
    border-bottom: 2px solid #6200ee;
  `)};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: #fff;
  padding: 20px 0px;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
  border-right: 1px solid rgba(0, 0, 0, 0.12);

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
    background: transparent;
    border-radius: 0px;
    border: none;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  @media (max-width: 1496px){
    max-height: 38vh;
  };
`;

export const DivRowElement = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 20px;
  margin-bottom: 15px;
`;

export const SpanElement = styled.span`
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  color: #0065ff;
`;

export const InputElement = styled.input<inputType>`
  display: flex;
  flex-grow: 1;
  flex-shrink: 2;
  width: ${props => props.width};
  margin: 0 16px 0 0;
  padding: 16px;
  border-radius: 4px;
  opacity: ${props => props.active ? '0.7' : '0.3'};
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.38);
  outline: none;
`;

export const DropDownElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 230px;
  margin: 0 16px 0 0;
  padding: 16px;
  border-radius: 4px;
  opacity: 0.3;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.38);
`;

export const FooterElement = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 75px;
  border-radius: 0 0 4px 4px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #f3f7ff;

  span{
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    text-transform: uppercase;
    color: #6200ee;
  }
`;

export const SaveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 36px;
  margin: 0 36px 0 20px;
  border-radius: 4px;
  background-color: #6200ee;
  color: #fff;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;

