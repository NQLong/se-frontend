import React from 'react';
import {formatPrice} from '../../untils/index'

function DetailInfo(props) {
    const { product } = props;
    
    return (
        <div className="detail-info-right">
            <div className="detail-info-right-price">
                <p className="price-box">
                    <span className="saleprice">{formatPrice(product.salePrice)}đ</span>
                    <span className="old-price">Giá cũ : <strong className="price">{formatPrice(product.price)}đ</strong> </span>
                </p>
                <p className="des">
                    Miêu tả: {product.description}
                </p>
                {/* <p className="detail-info-sale">
                    Sản phẩm thuộc chương trình HOT SALE CUỐI TUẦN - Nhanh tay thanh toán!
                            </p> */}
            </div>

            <div className="detail-info-right-buy">
                <div >
                    <button className="btnDat" >
                        <strong>Đặt món</strong>
                    </button>
                </div>
              
            </div>
        </div>
    );
}

export default DetailInfo;