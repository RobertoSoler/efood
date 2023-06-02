import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const Carrinho = styled.div`
  > h4 {
    background-color: ${cores.claro};
    color: ${cores.vermelho};
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    // margin-left: 8px;
    // margin-bottom: 8px;
    // margin-right: 8px;
    width: 240px;
    padding: 8px 8px;
    cursor: pointer;
    width: 100%;
  }
`
export const Checkout = styled.div`

`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
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

export const SideBar = styled.div`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  p {
    margin-top: 16px;
  }

  > h4 {
    background-color: ${cores.claro};
    color: ${cores.vermelho};
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    width: 240px;
    padding: 8px 8px;
    cursor: pointer;
    width: 100%;
  }
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

    &.error {
      border: 2px solid yellow;
    }
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

export const CartItem = styled.li`
  display: flex;
  padding: 8px 0;
  position: relative;
  background-color: ${cores.claro};
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
    margin-left: 8px;
  }

  h3 {
    color: ${cores.vermelho};
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    color: ${cores.branco};
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${lixeira});
    height: 16px;
    width: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const LinhaTotal = styled.div`
  display:flex;
  background-color: transparent;
  color: ${cores.branco};
  margin-bottom: 16px;
  margin-top: 32px;
  justify-content: space-between;
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
`
export const Linha2= styled.div`
    display: flex;
    margin-top: 4px;
    justify-content: space-between;

    input {
        width: 155px;
        height: 32px;
    }

`

export const Linha = styled.div`
    margin-top: 4px;

    small {
      color: ${cores.claro};
    }

    input {
      color: #4B4B4B;
      font-size: 14px;
      font-wight: bold;
      width: 100%;
  
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