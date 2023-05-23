import Restaurante from "../Restaurante";
import { List } from './styles'

import { Participante } from '../../pages/Home'

export type Props = {
    participantes: Participante[]
}

const RestaurantList = ({ participantes }: Props) => {
    return(
        <div className="container">
            <List>
                {participantes.map((empresa) => (
                    <li key={empresa.id}>
                        <Restaurante
                            id={empresa.id}
                            titulo={empresa.titulo}
                            category={empresa.tipo}
                            avaliacao={empresa.avaliacao}
                            description={empresa.descricao}
                            image={empresa.capa}
                        />
                    </li>
                ))}
            </List>
        </div>
    )
}

export default RestaurantList