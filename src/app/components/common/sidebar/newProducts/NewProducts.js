import React from 'react';
import "./newProducts.scss"
import productImg from"../../../../assets/images/products/product_pic_1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const NewProducts = () => {
    return (
        <>
            <div class="new_products_area">
                <h2 class="title">New Products</h2>

                <div class="products">
                    <div class="products_card">
                        <img src={productImg} alt="" />
                        <div class="card_body">
                            <h1>Accusantium Voluptatem</h1>
                            <p class="price"><span>$100.59</span> $89.36 </p>
                            <div class="review">
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />

                            </div>
                        </div>
                    </div>

                    <div class="products_card">
                        <img src={productImg} alt="" />
                        <div class="card_body">
                            <h1>Accusantium Voluptatem</h1>
                            <p class="price"><span>$100.59</span> $89.36 </p>
                            <div class="review">
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />

                            </div>
                        </div>
                    </div>

                    <div class="products_card">
                        <img src={productImg} alt="" />
                        <div class="card_body">
                            <h1>Accusantium Voluptatem</h1>
                            <p class="price"><span>$100.59</span> $89.36 </p>
                            <div class="review">
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />

                            </div>
                        </div>
                    </div>

                    <div class="products_card">
                        <img src={productImg} alt="" />
                        <div class="card_body">
                            <h1>Accusantium Voluptatem</h1>
                            <p class="price"><span>$100.59</span> $89.36 </p>
                            <div class="review">
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />

                            </div>
                        </div>
                    </div>

                    <a href="#">all new products</a>
                </div>
            </div>






        </>
    );
};

export default NewProducts;