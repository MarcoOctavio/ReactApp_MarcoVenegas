import './css/Custom.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemsListContainer'
import NavbarComponent from './components/NavbarComponent'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext'

function App() {

  return (
  
   <BrowserRouter>
   <CartProvider>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Hola y bienvenidos a Fantasy Ferment Shop'/>}/>
        <Route path='/categories/:category' element={<ItemListContainer greeting='Categoría' texto='Explora nuestros productos'/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </CartProvider>
   </BrowserRouter>
  )
}
export default App 