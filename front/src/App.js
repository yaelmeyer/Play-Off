import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ComoJugar from "./pages/ComoJugar";
import HomePage from "./pages/HomePage";
import IniciarJuego from './pages/IniciarJuego';
import UltimosPjsAgregados from "./pages/UltimosPjsAgregados";
import Header from './shared/Header';
import Nav from './shared/Nav';
import Footer from './shared/Footer';
import EleccionPjs from './pages/juego/EleccionPjs'
import UnirseAPartida from './pages/UnirseAPartida';
import Eliminatoria from './pages/juego/Eliminatoria'
import Novedades from './pages/Novedades';

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
          <Route path='novedades' element={<Novedades/>}/>
          <Route path='cargar-pjs' element={<EleccionPjs/>}/>
          <Route path="eliminatoria" element={<Eliminatoria/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
     
  );
}

export default App;
