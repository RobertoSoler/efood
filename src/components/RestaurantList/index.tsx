import Fornecedor from "../../models/fornecedores";
import Restaurante from "../Restaurante";
import { List } from './styles'

export type Props = {
    participantes: Fornecedor[]
}

const RestaurantList = ({ participantes }: Props) => (
    <div className="container">
            <List>
                {participantes.map(empresa => (
                    <Restaurante
                        key={empresa.id}
                        title={empresa.title}
                        nota={empresa.nota}
                        image={empresa.image}
                        category={empresa.category}
                        description={empresa.description}
                    />
                ))}
            </List>
    </div>
)

export default RestaurantList