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
    // margin-left: 8px;
    // margin-bottom: 8px;
    // margin-right: 8px;
    width: 240px;
    padding: 8px 8px;
    cursor: pointer;
    width: 100%;
  }
`

// export const Prices = styled.p`
//   font-weight: bold;
//   font-size: 14px;
//   color: ${cores.claro};
//   margin-bottom: 24px;

//   span {
//     display: block;
//     font-size: 12px;
//     color: ${cores.claro};
//   }
// `

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