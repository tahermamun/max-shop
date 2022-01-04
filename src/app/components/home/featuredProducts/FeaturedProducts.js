import React from 'react';
import featured_products_ads from "../../../assets/images/featured_products_ads.jpg";
import ProductCard from '../../common/productCard/ProductCard';
import fakeProductData from '../../../../fakeDatabase/fakeProductData.json';
import "./featuredProducts.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'



const FeaturedProducts = () => {
    return (
        <>
            <section class="featured_product_section">
                <div class="title_area clearfix">
                    <h2>FEATURED PRODUCTS</h2>
                    <div>
                        <a class="active" href="">new arrival</a>
                        <a href="">best sellers</a>
                        <div>
                            <button> <FontAwesomeIcon className="icon" icon={faChevronLeft} /></button>
                            <button> <FontAwesomeIcon className="icon" icon={faChevronRight} /></button>
                        </div>
                    </div>
                </div>
                <div class="product_area">
                    <div class="adds_box">
                        <img src={featured_products_ads} alt="" />
                        <div>
                            <h5>30% Discount</h5>
                            <h2>Latest Smartphones</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a perspiciatis excepturi! Voluptate architecto excepturi!</p>
                        </div>
                    </div>

                    <div class="product_box">
                        {fakeProductData.map(product => <ProductCard product={product} />)}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturedProducts;