import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import { Container, Disclaimer, Logo, Social } from './styles'

const Footer = () => (
    <Container>
        <Logo src={logo} alt='eFood'/>
        <Social>
            <img src={instagram} alt='Instagram'></img>
            <img src={facebook} alt='Facebook'></img>
            <img src={twitter} alt='Twitter'></img>
        </Social>
        <Disclaimer>
            A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
        </Disclaimer>
    </Container>
)

export default Footer