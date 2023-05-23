import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Menu from './pages/Menu';
// import Product from './pages/Product'

const Rotas = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante/:id" element={<Menu />} />
      {/* <Route path="/product/:id" element={<Product />} /> */}
    </Routes>
  )
  
export default Rotas