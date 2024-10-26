import './App.css'
import ItemListContainer from './components/ItemsListContainer'
import NavbarComponent from './components/NavbarComponent'
function App() {

  return (
   <div>
      <NavbarComponent/>
      <ItemListContainer greeting='Hola y bienvenidos a Fantasy Ferment Shop'/>
   </div>
  )
}
export default App