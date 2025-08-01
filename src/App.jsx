import './css/Custom.css' 
import ItemListContainer from './components/ItemsListContainer'
import NavbarComponent from './components/NavbarComponent'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'

function App() {

  return (
  
   <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Hola y bienvenidos a Fantasy Ferment Shop'/>}/>
        <Route path='/categories/:category' element={<ItemListContainer greeting='Hola, estás en la categoría:  '/>}/>
        <Route path='item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<NotFound/>}/>
        
      </Routes>
      <ItemDetailContainer/>
   </BrowserRouter>
  )
}
export default App 