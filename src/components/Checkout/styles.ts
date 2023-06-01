import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CheckoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Card = styled.div`
  height: 100%;
  margin-top: 16px;
  margin-bottom: 24px;

  label {
      margin-top: 8px;
  }

  input {
      height: 32px;
  }

`

export const Confirmacao = styled.div`
  color: ${cores.claro};

  p {
    margin-top: 16px;
  }
`

export const SideBar = styled.div`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  height: 100%;

  h2 {
    color: ${cores.claro};
    font-size: 16px;
  }

  label {
    background-color: ${cores.vermelho};
    color: ${cores.claro};
    font-size: 14px;
  }

  input {
    color: #4B4B4B;
    font-size: 14px;
    font-wight: bold;
    width: 100%;
  }
`

export const Button = styled.button`
    background-color: ${cores.claro};
    color: ${cores.vermelho};
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 8px;
    padding: 4px;
    width: 100%;
    cursor: pointer;
    height: 24px;
    border: none;
`
export const Grupo = styled.div`
    display: block;
`
export const Linha1 = styled.div`
    margin-top: 4px;
    display: flex;
    justify-content: space-between;

    label {
        width: 155px;
    }

    small {
      color: ${cores.claro};
    }
`
export const Linha2= styled.div`
    display: flex;
    margin-top: 4px;
    justify-content: space-between;

    input {
        width: 155px;
        height: 32px;
    }

    small {
      color: ${cores.claro};
    }
`

export const Linha = styled.div`
    margin-top: 4px;

    small {
      color: ${cores.claro};
    }
`

export const DivBotoes = styled.div`
    margin-top: 32px;

  button {
    background-color: ${cores.claro};
    color: ${cores.vermelho};
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 8px;
    padding: 4px;
    width: 100%;
    cursor: pointer;
    height: 24px;
    border: none;
  }
`