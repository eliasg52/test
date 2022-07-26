
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer bienvenida= {<h1 className="bg-danger my-5 py-5">CONTENIDO COMING SOON!!!</h1>}></ItemListContainer>
    </div>
  );
}

export default App;
