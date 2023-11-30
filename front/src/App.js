import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ComoJugar from "./pages/ComoJugar";
import HomePage from "./pages/HomePage";
import IniciarJuego from './pages/IniciarJuego';
import Header from './shared/Header';
import Nav from './shared/Nav';
import Footer from './shared/Footer';
import EleccionPjs from './pages/juego/EleccionPjs'
import Eliminatoria from './pages/juego/Eliminatoria'
import Novedades from './pages/Novedades';
import Comunicarse from './pages/Comunicarse'

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
          <Route path='comunicarse' element={<Comunicarse/>}/>
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
