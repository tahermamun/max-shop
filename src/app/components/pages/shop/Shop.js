import React from 'react';
import Sidebar from '../../common/sidebar/Sidebar';
import "./shop.scss";
import addsPic from "../../../assets/images/offer_banner-2.jpg"
import fakeProductData from '../../../../fakeDatabase/fakeProductData.json'
import ProductCard from '../../common/productCard/ProductCard'
const Shop = () => {
    return (
        <>
            <section className="shop_page_area">
                <Sidebar />
                <div className="shop_page_box">
                    <div className="single_page_header">
                        <img src={addsPic} alt="" />
                        <h1 className="title">Smart Phone</h1>
                        <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable that it has a more-or-less normal distribution of letters.
                        </p>
                    </div>
                    <div className="products">
                        {
                            fakeProductData.map(product => <ProductCard product={product} />)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;