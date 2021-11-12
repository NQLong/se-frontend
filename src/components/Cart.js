import React from 'react';
import CartItem from './CartItem';
import {Button} from './Form'
const CartButton = (props) => {
    const {
        isCartOpen,
        onCartButtonClick,
        buttonRef,
    } = props

    const onClick = () => {
        onCartButtonClick()
    }

    return (
        <div className={"cart-button"} onClick={onClick} ref={buttonRef}>
            {/* <button onClick={props.handleClick}> */}
            <i className="bx bx-cart" />
            {/* <span className="cart-button__counter">{props.cartItems}</span> */}
            {/* </button> */}
        </div>
    )
}


const Cart = (props) => {
    const {isCartOpen, toggleCart, cartRef} = props

    const handleCloseCart = () => {
        toggleCart()
    }

    return (

        <div className={'cart-container hide-cart-container'} ref={cartRef}>
            <div className='close-cart-button width-50 height-50' onClick={handleCloseCart}>
                <i className="bx bx-x transparent-bg white-color font-size-50"/>
            </div>
            <div className='cart-item-container'>
                <div className='cart-header-container'>
                    <h1 className="white-color">Cart</h1>
                </div>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className='cart-action-and-info'>
                <div className='cart-info'>
                    <span className="font-size-15 text-light-color flex-1">Subtotal</span>
                    <span className="font-size-15 white-color">$1000</span>
                </div>
                <div className='cart-action'>
                    <Button className='width-100 height-30'>Checkout</Button>
                </div>
            </div>
        </div>

    )
}

export {
    CartButton,
    Cart,
};
export default Cart;