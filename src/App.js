import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Header from './components/Header';



function App (props) {
  return (
    <div>
    <Header />
    <ItemListContainer greeting={'Bienvenidos a mi proyecto con REACT'} />
    </div>
  );
}

export default App;
