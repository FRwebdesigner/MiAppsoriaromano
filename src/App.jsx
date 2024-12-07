import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import { CartProvider } from './context/CartContext';
import CartView from './components/CartView';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavbarReactBootstrap/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos a nuestra tienda de Mascotas 😺🐶🧶🦴'/>}/> 
        <Route path='/products/:category' element={<ItemListContainer greeting='Bienvenidos a la categoria: '/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartView/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App