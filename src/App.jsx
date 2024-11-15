import './App.css'
import CartWidget from './components/CartWidget'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import itemCount from './components/ItemCount'

function App() {

  return (
      <div>
        <NavbarComponent/>
        <ItemListContainer greeting= 'bienvenidos a la tienda'/>
      </div>
  )
}

export default App
