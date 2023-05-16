import { Card, Descricao, Titulo, GoTag } from './styles'

type Props = {
    title: string;
    description: string;
    image: string;
}

const Prato = ({ title, description, image }: Props) => (
    <Card>
        <img src={image} alt={title}/>
        <Titulo>{title}</Titulo>
        <Descricao>{description}</Descricao>
        <GoTag>Adicionar ao carrinho</GoTag>
    </Card>
)

export default Prato