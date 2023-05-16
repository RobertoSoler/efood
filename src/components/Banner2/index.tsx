import { Imagem } from './styles'

import bannerFundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.svg'

const Banner2 = () => (
  <Imagem style={{ backgroundImage: `url(${bannerFundo})` }}>
    <div className="container">
        <h3>Restaurantes</h3>
        <img src={logo} alt='eFood'></img>
        <h3>0 produto(s) no carrinho</h3>
    </div>
  </Imagem>
)

export default Banner2