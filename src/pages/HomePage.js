import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Carousel from '../components/Slider/Carousel'
import ListProduct from '../components/allProduct/ListProduct'

function HomePage() {
    
    return (
        <div style={{position: 'relative'}}>
            <Header></Header>
            <Carousel></Carousel>
            <ListProduct></ListProduct>
            <Footer></Footer>
        </div>
    );
}

export default HomePage;