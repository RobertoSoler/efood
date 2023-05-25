import styled from "styled-components";
import { breakpoints, cores } from '../../styles'

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 16px;

    @media (max-width: ${breakpoints.desktop}) {
      grid-template-columns: 1fr 1fr;
  }
`

export const Prato = styled.div`
    background-color: ${cores.vermelho};
    position: relative;
    border-style: solid;
    border-width: 1px;
    border-color: #E66767;
    margin-top: 32px;
    margin-bottom: 32px;
    align-items: center;

    img {
        width: 304px;
        height: 167px;
        padding: 8px 8px;
        width: 100%;
    }
`

export const Titulo = styled.h3`
    font-size: 16px;
    font-weight: bold;
    display: block;
    margin-left: 8px;
    color: ${cores.claro};
`

export const Descricao = styled.p`
    margin-top: 24px;
    margin-bottom: 16px;
    font-size: 14px;
    display: block;
    margin-left: 8px;
    margin-right: 8px;
    color: ${cores.claro};
    height: 120px; 
`

export const GoTag1 = styled.div`
    background-color: ${cores.claro};
    color: ${cores.vermelho};
    font-size: 14px;
    text-align: center;
    margin-left: 8px;
    margin-bottom: 8px;
    margin-right: 8px;
    text-align: center;
    padding: 8px 8px;
    width: 95%;
    cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
  background-color: #E66767;
  color: white;
  display: flex;

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-top: 32px;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 16px;
  }

  > img {
    position: absolute;
    right: 0;
    padding: 8px;
    cursor: pointer;
  }
`

export const FotoPrato = styled.img`
  height: 280px;
  width: 280px;
  margin: 32px;
`

export const GoTag2 = styled.div`
    background-color: ${cores.claro};
    color: ${cores.vermelho};
    font-size: 14px;
    text-align: center;
    // margin-left: 8px;
    // margin-bottom: 8px;
    // margin-right: 8px;
    width: 240px;
    padding: 8px 8px;
    cursor: pointer;
`