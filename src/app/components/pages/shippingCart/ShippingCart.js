import React from 'react';
import "./shippingCart.scss"
import ShippingCartCard from '../../common/ShippingCartCard';
import ShippingCartSummery from "../../common/shippingCartSummary/ShippingCartSummary";
const ShippingCart = () => {
    return (
        <>
            <section class="shipping_cart_page_area">
                <ShippingCartCard />
                <ShippingCartSummery />
            </section>


            <h1>there will be a popular product section</h1>
        </>
    );
};

export default ShippingCart;