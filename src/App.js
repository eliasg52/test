import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider  from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className='App'>
      <CartContextProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path= '/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path= '/details/:figuraId' element={<ItemDetailContainer/>}/>
        <Route path= '/cart' element={<Cart/>}/>
      </Routes>
      </CartContextProvider>
    </div>
  );
}

export default App;
