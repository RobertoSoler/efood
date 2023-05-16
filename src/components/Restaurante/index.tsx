import { Link } from 'react-router-dom';
import { Card, Descricao, Titulo, CategTag, LinhaInfo, Nota, GoTag } from './styles'
import estrela from "../../assets/images/star2.png"

type Props = {
    title: string;
    category: string;
    description: string;
    nota: string;
    image: string;
}

const Restaurante = ({ title, category, description, nota, image }: Props) => (
    <Card>
        <img src={image} alt={title}/>
        <CategTag>{category}</CategTag>
        <LinhaInfo>
            <Titulo>{title}</Titulo>
            <Nota>{nota}</Nota>
            <img src={estrela} alt="Star"/>
        </LinhaInfo>
        <Descricao>{description}</Descricao>
        <GoTag>
            <Link to="/restaurante">Saiba mais</Link>
        </GoTag>
    </Card>
)

export default Restaurante