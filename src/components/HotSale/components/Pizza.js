import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'
import {handlePercentDiscount} from '../../../untils/index'
import '../Sale.css'

function Pizza(props) {
    const [hotPizza, setHotPizza] = useState([])
    useEffect(() => {
        async function FetchApi(){
            try {
               const {data} = await axios.get(`http://localhost:3000/pizza`)
                setHotPizza(data)
            } catch (error) {
                console.log(error)
            }
        }
        FetchApi()
    }, [])

   

    return (
        <section id="hotsale">
            <div className="hotsale">
                <h2>Pizza</h2>
                {
                    hotPizza ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotPizza)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Pizza;