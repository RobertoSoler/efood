import { List,Prato,Titulo,GoTag1,GoTag2,FotoPrato,Modal,ModalContent,Descricao } from './styles'
import fechar from '../../assets/images/fechar.png'
import { CardapioItem } from '../../pages/Home'
import { useState } from "react";

import { add,open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

export type Props = {
    itensCardapio: CardapioItem[]
    // itensCardapio: CardapioItem
}

// type Props = {
//     foto: string
//     preco: number
//     id: number
//     nome: string
//     descricao: string
//     porcao: string
// }

type ModalState = {
    isVisible: boolean
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Principal = ({ itensCardapio }: Props) => {

    const dispatch = useDispatch()

    const menuItem = {id: 1, nome: 'nome', preco: 1.00, foto: 'imagem',descricao: 'descricao', porcao: 'porcao'};
    const [dadosPrato, setDadosPrato] = useState(menuItem)

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
        setDadosPrato(menuItem)
        setModal({
            isVisible: true
          })
    }

    const [modal, setModal] = useState<ModalState>({
        isVisible: false
      })

    const closeModal = () => {
        setModal({
          isVisible: false
        })
    }

    const addToCart = () => {
        dispatch(add(dadosPrato))
        dispatch(open())
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
                            <GoTag1 onClick={() => achaItem(item.id)}>Mais detalhes</GoTag1>
                        </Prato>
                    </li>
                ))}
            </List>
            <Modal className={modal.isVisible ? 'visivel' : ''}>
                <ModalContent className="container">
                    <img
                        src={fechar} alt="fechar"
                        onClick={() => {
                        closeModal()
                        }}
                    />
                    <div>
                    <FotoPrato src={dadosPrato.foto} alt="prato" />
                    </div>
                    <div>
                    <h4>{dadosPrato.nome}</h4>
                    <p>{dadosPrato.descricao}</p>
                    <p>{`Serve de ${dadosPrato.porcao}`}</p>
                    <GoTag2 onClick={addToCart}>{`Adicionar ao carrinho - ${formataPreco(dadosPrato.preco)}`}</GoTag2>
                    </div>      
                </ModalContent>
                <div
                    onClick={() => {
                    closeModal()
                    }}
                    className="overlay"
                ></div>
            </Modal>
        </div>
    )

}

export default Principal
