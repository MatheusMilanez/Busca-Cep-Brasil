import './App.css';
import Footer from './componentes/Footer';
import Formulario from './componentes/Formulario';



function App() {

  return (
    <div className="App">
      <header className="App-header">
         <h1 className='titulo'>Busca Cep Brasil</h1>
          <Formulario/>
          <Footer />    
      </header>
    </div>
  );
}

export default App;
