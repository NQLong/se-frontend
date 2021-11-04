import React from 'react';
import {Link} from 'react-router-dom'
import {formatPrice} from '../../untils/index'

function Product(props) {
    const { product } = props;

    return (
        <div className="hotsale-listproduct-product" style={{backgroundColor:'white',borderRadius:20,marginRight:5,width: '19%'}}>
            <Link to={"/detail/" + product.id}>
                <img src={product.image}></img>
                <p className="hotsale-listproduct-product-name">{product.name}</p>
                <div className="price">
                    <span className="price1">{formatPrice(product.salePrice)}đ</span>
                    <span className="price2">{formatPrice(product.price)}đ</span>
                </div>
            </Link>
            {
                product.percentDiscount >= 5 ? (<div className="discount">
                <p>{product.percentDiscount}%</p>
            </div>) : ''
            }
            <div className="buy">
                <Link to="" > Đặt món</Link>
            </div>
    
        </div>
    );
}

export default Product;