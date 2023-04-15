import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App () {
  return (
    <div className='App'>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <ItemListContainer />}/>
        <Route path='/category/:categoryId' element={ <ItemListContainer/> }/>
        <Route path='/item/:itemId' element={ <ItemDetailContainer /> }/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;

