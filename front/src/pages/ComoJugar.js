import React from 'react';
import Header from '../shared/Header';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';
import ComoJugarTexto from '../components/ComoJugarTexto';

const ComoJugar = (props) =>{
    return(
        <>
            <Header/>
            <Nav/>
            <ComoJugarTexto/>
            <Footer/>
        </>
    );
}

export default ComoJugar;