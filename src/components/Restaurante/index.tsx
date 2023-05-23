import { Link } from 'react-router-dom';
import { Card, Descricao, Titulo, CategTag, LinhaInfo, Nota, GoTag } from './styles'
import estrela from "../../assets/images/star2.png"

type Props = {
    id: number
    titulo: string
    category: string
    description: string
    avaliacao: number
    image: string
}

const Restaurante = ({ id, titulo, category, description, avaliacao, image }: Props) => (
    <Card>
        <img src={image} alt={titulo}/>
        <CategTag>{category}</CategTag>
        <LinhaInfo>
            <Titulo>{titulo}</Titulo>
            <Nota>{avaliacao}</Nota>
            <img src={estrela} alt="Star"/>
        </LinhaInfo>
        <Descricao>{description}</Descricao>
        <GoTag>
            <Link to={`/restaurante/${id}`}>Saiba mais</Link>
        </GoTag>
    </Card>
)

export default Restaurante