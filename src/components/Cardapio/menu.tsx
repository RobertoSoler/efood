import menuItem from "../../models/cardapio";
import Prato from "../Prato";
import { List } from './styles'

export type Props = {
    itensCardapio: menuItem[]
}

const CardapioList = ({ itensCardapio }: Props) => (
    <div className="container">
            <List>   
                {itensCardapio.map(item => (
                    <Prato
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        description={item.description}
                    />
                ))}
            </List>
    </div>
)

export default CardapioList