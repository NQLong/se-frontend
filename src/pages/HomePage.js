import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Carousel from '../components/Slider/Carousel'

function HomePage() {
    
    return (
        <div style={{position: 'relative'}}>
            <Header></Header>
            <Carousel></Carousel>
            <Footer></Footer>
        </div>
    );
}

export default HomePage;