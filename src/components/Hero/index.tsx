import { Imagem } from './styles'

import bannerFundo from '../../assets/images/pasta.png'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${bannerFundo})` }}>
    <div className="container">
        <h2>Italiana</h2>
        <h4>La Dolce Vitta Trattoria</h4>
    </div>
  </Imagem>
)

export default Hero