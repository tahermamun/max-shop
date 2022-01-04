import React from 'react';
import { NavLink } from 'react-router-dom';
import './shippingCartSummary.scss'


const ShippingCartSummery = ({ button = true }) => {
    return (
        <>
            <div class="cart_summary_area">
                <h3>Summary</h3>
                <div className="div1">
                    <p>
                        <span>3 Items</span>
                        <span>$564.98</span>
                    </p>
                    <p>
                        <span>Shipping</span>
                        <span>Free</span>
                    </p>
                </div>
                <div>
                    <p>
                        <span>Total (tax incl.)</span>
                        <span>$419.00</span>
                    </p>

                    {
                        button ? <NavLink to="/checkout" >Process to checkout</NavLink> : null
                    }


                </div>
            </div>
        </>
    );
};

export default ShippingCartSummery;