import axios from 'axios'
import React, { useEffect,useState } from 'react';
import './Detail.css'
import DetailInfo from './DetailInfo'
import {
    useParams
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getproductById } from '../../actions/ProductAction';
import {handlePercentDiscount} from '../../untils/index'
import ListProduct from '../HotSale/ListProduct'


function Detail(props) {
    const dispatch = useDispatch()
    const { id } = useParams();
    console.log(id);
    const detailProduct = useSelector(state => state.getProductById.product)
    console.log(detailProduct)

    useEffect(() => {
        dispatch(getproductById(id))
    }, [dispatch])

    const [name, setName] = useState('Pizza');
    const [hotPizza, setHotPizza] = useState([])
    useEffect(() => {
        async function FetchApi(){
            try {
                // 
               const {data} = await axios.get(`http://localhost:3000/pizza`)
                setHotPizza(data)
            } catch (error) {
                console.log(error)
            }
        }
        FetchApi()
    }, [])

    return (
        <section id="detail" >
            {
            detailProduct ? (
            <div className="detail" >
                <div className="detail-title">
                    <h2>{detailProduct.name}</h2>
                </div>
                <div className="detail-info" >
                    <div className="detail-info-slide">
                        <div className="detail-info-slide-image">
                            <img src={detailProduct.image}></img>
                        </div>
                    </div>
                    <DetailInfo  product={detailProduct}></DetailInfo>
                </div>
                <h1  className="mt-50">Các sản phẩm cùng danh mục</h1>
                {
                    hotPizza ? (<ListProduct HotSaleProducts={handlePercentDiscount(hotPizza)}></ListProduct>) : ''
                }
            </div>

            ) : ''
            }
        </section>
    );
}

export default Detail;