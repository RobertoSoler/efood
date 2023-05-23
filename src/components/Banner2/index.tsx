import { Imagem, Retorno } from './styles'

import bannerFundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Banner2 = () => (
  <Imagem style={{ backgroundImage: `url(${bannerFundo})` }}>
    <div className="container">
        <Retorno to={"/"}>Restaurantes</Retorno>
        <img src={logo} alt='eFood'></img>
        <h3>0 produto(s) no carrinho</h3>
    </div>
  </Imagem>
)

export default Banner2