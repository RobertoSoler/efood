import {
  Overlay,
  CartContainer,
  SideBar,
  CartItem,
  LinhaTotal
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Modal'

const Cart = () => {

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className= {isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
        {items.map((item) => (
          <CartItem>
            <img src={item.foto} alt={item.nome} />
            <div>
              <h3>{item.nome}</h3>
              <p>{formataPreco(item.preco)}</p>
            </div>
            <button onClick={() => removeItem(item.id)} type="button" />
          </CartItem>
        ))}
        </ul>
        <LinhaTotal>
          <h4>Valor total</h4>
          <h4>{formataPreco(getTotalPrice())}</h4>
        </LinhaTotal>
        <h4>Continuar com a entrega</h4>
      </SideBar>
    </CartContainer>
  )
}

export default Cart