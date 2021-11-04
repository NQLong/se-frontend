import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Carousel from '../components/Slider/Carousel'
import Pizza from '../components/HotSale/components/Pizza'
import Sushi from '../components/HotSale/components/Sushi'
import TrangMieng from '../components/HotSale/components/TrangMieng';

function HomePage() {
    
    return (
        <div style={{position: 'relative'}}>
            <Header></Header>
            <Carousel></Carousel>
            <Pizza></Pizza> 
            <Sushi></Sushi>
            <TrangMieng></TrangMieng>
            <Footer></Footer>
        </div>
    );
}

export default HomePage;