import React from 'react';
import fakeProductData from '../../../../fakeDatabase/fakeProductData.json'
import ProductCard from '../../common/productCard/ProductCard';
import "./latestProducts.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const LatestProducts = () => {
    return (
        <>
            <section class="new_product_section">
                <div class="title_area clearfix">
                    <h2>NEW PRODUCTS</h2>
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

                    {fakeProductData.slice(0, 6).map(product => <ProductCard product={product} />)}

                </div>
            </section>
        </>
    );
};

export default LatestProducts;