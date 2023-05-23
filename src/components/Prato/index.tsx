import { Card, Descricao, Titulo, GoTag } from './styles'

type Props = {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
}

const Prato = ({ foto, nome, descricao, porcao }: Props) => (
    <Card>
        <img src={foto} alt={nome}/>
        <Titulo>{nome}</Titulo>
        <Descricao>{descricao}</Descricao>
        <GoTag>Mais detalhes</GoTag>
    </Card>
)

export default Prato