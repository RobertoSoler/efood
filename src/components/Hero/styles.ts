import styled from 'styled-components'
import { cores } from "../../styles";

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.95;

  .container {
    height: 186px;
    display: block;
    
      h2 {
        font-size: 32px;
        font-weight: normal;
        color: ${cores.claro};
        padding: 24px;
      }

      h4 {
        font-size: 32px;
        font-weight: bold;
        color: ${cores.claro};
        margin-top: 128px;
      }

  }
`