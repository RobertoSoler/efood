import { Imagem } from './styles'

import bannerFundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.svg'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerFundo})` }}>
    <div className="container">
        <img src={logo} alt='eFood'></img>
        <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
    </div>
  </Imagem>
)

export default Banner