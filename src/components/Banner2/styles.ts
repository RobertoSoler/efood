import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    height: 186px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 64px 64px;
    font-size: 18px;

    img {
        max-width: 125px
        height: auto;
      }
    
  }
`

export const Retorno = styled(Link)`
  font-size: 24px;
  color: #E66767;
`