import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App (props) {
  return (
    <div>
    <Header />
    <ItemListContainer greeting={'Bienvenidos a mi proyecto con REACT JS'} />
    <ItemDetailContainer />
    </div>
  );
}


// {/* <BrowserRouter>
//   <routes>
//     <route></route>
//   </routes>
// </BrowserRouter> */}

// {/* <Route path = "/" element = {<Nosotros />} */}


export default App;

