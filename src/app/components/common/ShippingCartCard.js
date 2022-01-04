import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import productImg from '../../assets/images/products/product_pic_4.jpg'
const ShippingCartCard = () => {

    const [numberItems, setNumberItems] = useState(1)

    return (
        <>
            <div className="cart_card_box_area">
                <h2 className="title">Shopping cart</h2>

                <div className="card_box">
                    <div className="cart_card">
                        <img src={productImg} alt="" />
                        <div className="description">
                            <h2> Laudant doloremque</h2>
                            <p className="price">€91.00</p>
                            <p className="size">Size: <span>S</span></p>
                            <p className="color">color: <span>Gray</span></p>
                        </div>

                        <div className="number_Of_items">
                            <button onClick={() => setNumberItems((prev) => prev - 1)}><FontAwesomeIcon  classNameName="icon" icon={faChevronLeft} /> </button>
                            <input type="number" value={numberItems} />
                            <button onClick={() => setNumberItems((prev) => prev + 1)}><FontAwesomeIcon  classNameName="icon" icon={faChevronRight} /> </button>

                        </div>

                        <p className="total_price_of_items">$56.26</p>
                        <button><i className="fas fa-trash"></i></button>



                    </div>


                </div>


            </div>
        </>
    );
};

export default ShippingCartCard;