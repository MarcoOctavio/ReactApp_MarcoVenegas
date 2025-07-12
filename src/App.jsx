import './App.css'
import './css/Custom.css' //TODO: Refactorizar css en uno solo o en sus componentes
import ItemListContainer from './components/ItemsListContainer'
import NavbarComponent from './components/NavbarComponent'

function App() {

  return (
    <>
   <div>
      <NavbarComponent/>
      <ItemListContainer greeting='Hola y bienvenidos a Fantasy Ferment Shop'/>
   </div>
   </>
  )
}
export default App