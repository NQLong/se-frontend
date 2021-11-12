import React from "react";
import Sidebar from "../components/sidebar";
import { useLocation } from "react-router-dom";
import { Input } from "reactstrap";
import { CartButton } from "../components/Cart";
import Cart from "../components/Cart";
const RestaurantView = (props) => {
    const { isSidebarOpen, isCartOpen } = props;

    const location = useLocation();
    const [deliType, setDeliType] = React.useState("Dine in");
    return (
        <div className={"view-container" + (isSidebarOpen ? ` padding-left-270` : ' padding-left-100')}>
            <div className='restaurant-header'>
                <div className="large-header">
                    <h1>{"RESTAURANT NAME"}</h1>
                    <h3>
                        {new Date().toDateString()}
                    </h3>
                </div>
                <div className="input-box">
                    <i className='bx bx-search' />
                    <input type="text" placeholder="Search for items" />
                </div>
            </div>

            <div className='menu-nav'>
                <span className='menu-nav-item'>Fried</span>
                <span className='menu-nav-item'>Fried</span>
                <span className='menu-nav-item'>Fried</span>
                <span className='menu-nav-item'>Fried</span>
                <span className='menu-nav-item'>Fried</span>
                <span className='menu-nav-item'>Fried</span>
                <span className='menu-nav-item'>Fried</span>
                <span className='menu-nav-item'>Fried</span>
                <span className='menu-nav-item'>Fried</span>
                <span className='menu-nav-item'>Fried</span>
                <span className='menu-nav-item'>Fried</span>
                <span className='menu-nav-item'>Fried</span>
            </div>
            <div className='menu-deli-type-container'>
                <h3>Choose Dishes</h3>
                <span className='deli-selector-container'>
                    <select className='select' name="select" id="deliSelect" onChange={(e) => setDeliType(e.target.value)}>
                        <option>Dine in</option>
                        <option>Take away</option>
                    </select>
                </span>
            </div>
            <div className='menu-items-container'>
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
                    return (
                        <div className='menu-item'>
                            <div className='menu-item-image'>
                                <img src="https://v2nqlong.redirectme.net/api/media/uploads/Image_1_Tbk2gnZ.png" alt="image" width="132" height="132" />
                            </div>
                            <div className="menu-item-content">
                                <span className="menu-item-name">Spicy seasoned seafood noodles</span>
                                <span className="menu-item-text">20$</span>
                                <span className="menu-item-text">available</span>
                                {/* <span className="menu-item-name">beautiful name</span> */}
                            </div>
                        </div>
                    )
                })
                }


            </div>
        </div>
    );
};



const Client = (props) => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [isCartOpen, setIsCartOpen] = React.useState(false);
    const cartButton = React.useRef(null);
    const cart = React.useRef(null);
    const mainView = React.useRef(null);


    const toggleCart = () => {
        setIsCartOpen(!cartButton.current.classList.contains("hide"))
        cartButton.current.classList.toggle("hide");
        cart.current.classList.toggle("hide-cart-container");
        mainView.current.classList.toggle("opacity-0-5");
        mainView.current.classList.toggle("stop-pointer-event");
        mainView.current.classList.toggle("stop-scroll-event");
    }

    console.log(isCartOpen)

    return (<div >
        <Sidebar setIsOpen={setIsSidebarOpen} />
        <div disabled ref={mainView}>

            <RestaurantView isSidebarOpen={isSidebarOpen} isCartOpen={isCartOpen} />
        </div>
        {/* </div> */}
        <CartButton onCartButtonClick={toggleCart} isCartOpen={isCartOpen} buttonRef={cartButton} />
        <Cart isCartOpen={isCartOpen} toggleCart={toggleCart} cartRef={cart} />
    </div>
    );
};

export default Client;
