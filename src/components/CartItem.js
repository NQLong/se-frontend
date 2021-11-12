import React from 'react';
import {Input} from './Form';

const CartItem = (props) => {
    return <div className='cart-item'>
        <div className='cart-item-content'>
            <div className='cart-item-detail height-50'>
                <div className='cart-item-specific'>
                    <img src="https://v2nqlong.redirectme.net/api/media/uploads/Image_1_Tbk2gnZ.png" alt="image" width="40" height="40" />
                    <div className='cart-item-info width-150'>
                        <span className='cart-item-name white-color'>Black shit</span>
                        <span className='cart-item-price white-color'>5$</span>
                    </div>
                </div>
                <div className='cart-item-number-box'>
                    <div className='cart-item-number white-color height-50 width-50 text-box center-content'>100</div>
                </div>
            </div>
            <div className='cart-item-note height-50'>
                <Input placeholder="hello" iconClass="bx bx-search" className={"width-300 height-50"}/>
            </div>
        </div>
        <div className='cart-item-price-and-action'>
            <div className='cart-item-price white-color height-50 text-center center-content'>$100</div>
            <div className='cart-item-delete width-50 height-50 center-content text-box'>
                <i className='bx bx-trash-alt white-color '/>
            </div>
        </div>
    </div>
}

export default CartItem;
