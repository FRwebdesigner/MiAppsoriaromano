import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './components/ItemList';


function App() {
  return (
    <>
    <NavbarReactBootstrap />
    <ItemDetailContainer />
    <ItemListContainer />
    <ItemList />
      </>
     );
  }

export default App;