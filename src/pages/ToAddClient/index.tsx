import React, { useState } from 'react';
import { DivRowElement, DropDownElement, FooterElement, FormContainer, HeaderAdd, InputElement, OptionHeader, SaveButton, SpanElement, TitleAdd } from './styles';
import arrowDownGray from '../../assets/icons/ic-arrow-drop-down-gray.svg';

export const ToAddClient = () => {
  const [option, setOption] = useState(1);

  return (
    <div style={{ marginBottom: "30px" }}>
      <TitleAdd>
        Adicionar cliente
      </TitleAdd>
      <HeaderAdd>
        <OptionHeader selected={option === 1} onClick={() => setOption(1)}>Dados do Cliente</OptionHeader>
        <OptionHeader selected={option === 2}  onClick={() => setOption(2)}>Dados do Veiculo</OptionHeader>
        <OptionHeader selected={option === 3}  onClick={() => setOption(3)}>Itenção de Compra</OptionHeader>
      </HeaderAdd>
      {option === 1 ? (
        <>
          <FormContainer>
            <DivRowElement>
              <InputElement placeholder="Nome" width="230px" active />
              <InputElement placeholder="SobreNome" width="230px" active />
            </DivRowElement>
            <DivRowElement>
              <InputElement placeholder="E-mail" width="510px" active />
            </DivRowElement>
            <DivRowElement>
              <InputElement placeholder="Telefone" width="230px" active />
              <SpanElement>+ adicionar outro</SpanElement>
            </DivRowElement>
            <DivRowElement>
              <InputElement placeholder="CEP" width="230px" active />
            </DivRowElement>
            <DivRowElement>
              <InputElement placeholder="Endereço" width="510px" active={false} disabled />
            </DivRowElement>
            <DivRowElement>
              <InputElement placeholder="Numero" width="230px" active={false} disabled />
              <InputElement placeholder="Complemento" width="230px" active={false} disabled />
            </DivRowElement>
            <DivRowElement>
              <InputElement placeholder="Bairro" width="230px" active={false} disabled />
            </DivRowElement>
            <DivRowElement>
              <InputElement placeholder="Cidade" width="230px" active={false} disabled />
              <DropDownElement>
                Estado
                <img src={arrowDownGray} alt="Icone de Seta para Baixo" width="24px" height="24px" />
              </DropDownElement>
            </DivRowElement>
          </FormContainer>
          <FooterElement>
            <SaveButton>Salvar</SaveButton>
            <span>Cancelar</span>
          </FooterElement>
        </>
      ) : (
          <FormContainer
            style={{ alignItems: 'center', justifyContent: 'center', height: '50vh', border: '1px solid rgba(0, 0, 0, 0.12)' }}
          >Esse conteúdo se encontra em desenvolvimento!
          </FormContainer>
      )}
    </div>
  )
}
