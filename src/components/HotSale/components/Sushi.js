import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListProduct from '../ListProduct'
import '../Sale.css'
import {handlePercentDiscount} from '../../../untils/index'


function Sushi(props) {
    const [hotSushi, setHotSushi] = useState([])

    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:3000/sushi`)
                setHotSushi(data)
            } catch (error) {
                console.log(error)
            }
        }
        FetchApi()
    }, [])

    return (
        <section id="hotsale">
            <div className="hotsale">
                <h2>Sushi</h2>
                {
                    hotSushi ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotSushi)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default Sushi;