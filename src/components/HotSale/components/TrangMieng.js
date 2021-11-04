import React, { useEffect, useState } from 'react';
import ListProduct from '../ListProduct'
import axios from 'axios'
import '../Sale.css'
import {handlePercentDiscount} from '../../../untils/index'


function TrangMieng(props) {
    const [hotTrangMieng, setHotTrangMieng] = useState([])

    useEffect(() => {
        async function FetchApi(){
            try {
                const {data} = await axios.get(`http://localhost:3000/trangmieng`)
                setHotTrangMieng(data)
            } catch (error) {
                console.log(error)
            }
        }
        FetchApi()
    }, [])

    return (
        <section id="hotsale">
            <div className="hotsale">
                <h2>Tráng Miệng</h2>
                {
                   hotTrangMieng ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotTrangMieng)}></ListProduct>) : ''
                }
            </div>
        </section>

    );
}


export default TrangMieng;