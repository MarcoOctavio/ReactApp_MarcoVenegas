import './css/Custom.css' 
import ItemListContainer from './components/ItemsListContainer'
import NavbarComponent from './components/NavbarComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
  
   <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Hola y bienvenidos a Fantasy Ferment Shop'/>}/>
      </Routes>
      
   </BrowserRouter>
  )
}
export default App