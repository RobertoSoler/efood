import { Modal, ModalContent, FotoPrato, GoTag } from './styles'
import fechar from '../../assets/images/fechar.png'
import { useState } from 'react'

type Props = {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
}

type ModalState = {
    isVisible: boolean
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ShowCard = ({ id, foto, nome, preco, descricao, porcao }: Props) => {

    const [modal, setModal] = useState<ModalState>({
        isVisible: true
      })

    const closeModal = () => {
        setModal({
          isVisible: false
        })
    }

    return (
        <Modal className={modal.isVisible ? 'visivel' : ''}>
          <ModalContent className="container">
            <img
                src={fechar} alt="fechar"
                onClick={() => {
                  closeModal()
                }}
            />
            <div>
              <FotoPrato src={foto} alt="prato" />
            </div>
            <div>
              <h4>{nome}</h4>
              <p>{descricao}</p>
              <p>{porcao}</p>
              <GoTag>{`Adicionar ao carrinho - ${formataPreco(preco)}`}</GoTag>
            </div>      
          </ModalContent>
          <div
            onClick={() => {
              closeModal()
            }}
            className="overlay"
          ></div>
      </Modal>
    )
}

export default ShowCard