import { Imagem, Retorno } from './styles'

import bannerFundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Banner2 = () => {

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Imagem style={{ backgroundImage: `url(${bannerFundo})` }}>
      <div className="container">
          <Retorno to={"/"}>Restaurantes</Retorno>
          <img src={logo} alt='eFood'></img>
          <h3 onClick={openCart}>{items.length} produto(s) no carrinho</h3>
      </div>
    </Imagem>
  )
}

export default Banner2