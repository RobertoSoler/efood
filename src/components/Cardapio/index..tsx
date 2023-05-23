import menuItem from "../../models/cardapio";
import { List,Prato,Titulo,GoTag,Descricao } from './styles'

import { Participante,CardapioItem } from '../../pages/Home'
import ShowCard from "../ShowCard";
import { useState } from "react";

export type Props = {
    itensCardapio: CardapioItem[]
}

const CardapioList = ({ itensCardapio }: Props) => {

    const [showDiv, setShowDiv] = useState(false);

    // const [selectedMenuItem, setSelectedMenuItem] = useState({id: 1, nome: 'nome', preco: 1.00, foto: 'imagem',descricao: 'descricao', porcao: 'porcao'});

    const menuItem = {id: 1, nome: 'nome', preco: 1.00, foto: 'imagem',descricao: 'descricao', porcao: 'porcao'};

    function achaItem(indice: number) {
        if (indice < 1) { indice = 1};
        const prato = itensCardapio.find(item => item.id === indice);
        if (prato) {
            menuItem['id'] = prato.id;
            menuItem['nome'] = prato.nome;
            menuItem['preco'] = prato.preco;
            menuItem['foto'] = prato.foto;
            menuItem['descricao'] = prato.descricao;
            menuItem['porcao'] = prato.porcao;
        }
        setShowDiv(true);
    }

    return (
        <div className="container">
            <List>   
                {itensCardapio.map(item => (
                    <li key={item.id}>
                        <Prato>
                            <img src={item.foto} alt={item.nome}/>
                            <Titulo>{item.nome}</Titulo>
                            <Descricao>{item.descricao}</Descricao>
                            <GoTag onClick={() => achaItem(item.id)}>Mais detalhes</GoTag>
                        </Prato>
                    </li>
                ))}
            </List>
            {showDiv && <ShowCard id={menuItem.id} preco={menuItem.preco} foto={menuItem.foto} nome={menuItem.nome} descricao={menuItem.descricao} porcao={menuItem.porcao}/>}
            {/* <ShowCard id={menuItem.id} preco={menuItem.preco} foto={menuItem.foto} nome={menuItem.nome} descricao={menuItem.descricao} porcao={menuItem.porcao}/> */}
        </div>
    )

}

export default CardapioList