import React from 'react';
import Header from "../shared/Header";
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';
import Main from '../shared/Main';

const HomePage = (props) =>{
    return(
        <>
            <Header/>
            <Nav/>
            <Main/>
            <Footer/>
        </>
    );
}

export default HomePage;