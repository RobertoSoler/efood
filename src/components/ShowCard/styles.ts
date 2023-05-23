import styled from 'styled-components'
import { cores } from '../../styles'

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

export const GoTag = styled.div`
    background-color: ${cores.claro};
    color: ${cores.vermelho};
    font-size: 14px;
    text-align: center;
    // margin-left: 8px;
    // margin-bottom: 8px;
    // margin-right: 8px;
    padding: 8px 8px;
    cursor: pointer;
`