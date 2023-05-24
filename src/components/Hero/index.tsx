import { Imagem } from './styles'

import bannerFundo from '../../assets/images/pasta.png'

type Props = {
  titulo: string
  categoria: string
}

const Hero = ({ titulo, categoria }: Props) => (
  <Imagem style={{ backgroundImage: `url(${bannerFundo})` }}>
    <div className="container">
        <h2>{categoria}</h2>
        <h4>{titulo}</h4>
    </div>
  </Imagem>
)

export default Hero