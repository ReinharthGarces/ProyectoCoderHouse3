import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Ckeckout/Checkout'
import { CartProvider } from './Data/context/cartContext';
import NotFound from './config/notFound';



function App () {
  return (
    <div className='App'>
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting = {'Listado de productos'}/> }/>
          <Route path='/category/:categoryId' element={ <ItemListContainer /> }/>
          <Route path='/item/:itemId' element={ <ItemDetailContainer greeting = { "Detalle del producto" }/> }/>
          <Route path='/cart' element={ <Cart /> }/>
          <Route path='/checkout' element={ <Checkout /> }/>
          <Route path='*' element={ <NotFound greeting ={ "404 NOT FOUND"}/> }/>
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
    </div>
  );
}


export default App;

