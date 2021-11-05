import React, { useEffect } from 'react';
import ListProduct from '../HotSale/ListProduct'
import './Sale.css'
import {handlePercentDiscount} from '../../untils/index'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct} from '../../actions/ProductAction';

function AllProduct(props) {
    const dispatch = useDispatch()
    
    const product = useSelector(state => state.allProduct.product)

    useEffect(() => {
        dispatch(getAllProduct())

        return () => {
            return []
        }
    }, [dispatch])

    return (
        <section id="hotsale">
            <div className="hotsale">
                <button className="btnFilter">Pizza</button>
                <button className="btnFilter">Sushi</button>
                <button className="btnFilter">Tráng miệng</button>
                {
                   product && product.length > 0 ? (<ListProduct HotSaleProducts={handlePercentDiscount(product)}></ListProduct>) : (<span>Không có sản phẩm</span>)
                }
            </div>
        </section>

    );
}


export default AllProduct;