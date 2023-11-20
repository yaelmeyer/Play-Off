import {BrowserRouter, Routes, Route} from 'react-router-dom';

import FormularioJuego from "./components/FormularioJuego";
import ComoJugar from "./pages/ComoJugar";
import HomePage from "./pages/HomePage";
import IniciarJuego from './pages/IniciarJuego';
import UltimosPjsAgregados from "./pages/UltimosPjsAgregados";
import Header from './shared/Header';
import Nav from './shared/Nav';
import Footer from './shared/Footer';
import UnirseAPartida from './pages/UnirseAPartida';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='como-jugar' element={<ComoJugar/>}/>
          <Route path='iniciar-juego' element={<IniciarJuego/>}/>
          <Route path='unirse-partida' element={<UnirseAPartida/>}/>
          <Route path='ultimos-pjs' element={<UltimosPjsAgregados/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
     
  );
}

export default App;
