import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  margin-bottom: 32px;

  img {
    max-width: 125px
    height: auto;
    margin-top: 40px;
  }

  h1 {
    font-size: 36px;
    margin-top: 168px;
    max-width: 544px
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`