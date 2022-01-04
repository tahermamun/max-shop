import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import './singleProduct.scss'
import { faFacebookF, faGooglePlusG, faInstagram, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';
import fakeProductData from '../../../../fakeDatabase/fakeProductData.json'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

    let { productId } = useParams()

    const { id, img, title, mainPrice, disPrice } = fakeProductData[productId - 1]

    return (
        <>
            <section className="product_single_page">
                <div className="product_container">

                    <div className="product">
                        <img src={img} alt="" />

                        <div className="product_content">
                            <h1>{title}</h1>
                            <div className="p_r">
                                <div className="price">
                                    {disPrice ? <p>${disPrice}</p> : null}
                                    <p>${mainPrice}</p>
                                </div>
                                <div class="review">
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <p>(34 Reviews)</p>
                                </div>
                            </div>
                            <p className="short_des">
                                Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.

                            </p>
                            <div className="color">
                                <p>Color</p>
                                <ul>
                                    <li>
                                        <input type="radio" name="color" value='pink' style={{ background: 'pink' }} />
                                    </li>

                                    <li>
                                        <input type="radio" name="color" value='red' style={{ background: 'red' }} />
                                    </li>
                                    <li>
                                        <input type="radio" name="color" value='green' style={{ background: 'green' }} />
                                    </li>

                                </ul>
                            </div>

                            <div className="size">
                                <p>Size</p>

                                <select className="size_option">
                                    <option value="M" selected>M</option>
                                    <option value="S">S</option>
                                    <option value="L">L</option>
                                </select>
                            </div>

                            <div className="add_to_carts">

                                <div className="item_counter">
                                    <button>
                                        <FontAwesomeIcon className="icon" icon={faPlus} />
                                    </button>
                                    <p>5</p>
                                    <button>
                                        <FontAwesomeIcon className="icon" icon={faMinus} />
                                    </button>
                                </div>

                                <button>ADD TO CART</button>
                            </div>
                            <div class="social_share">
                                <ul>
                                    <li><a href="#"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon className="icon" icon={faPinterestP} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="product_description">
                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active tab_btn" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav_description" type="button" role="tab" aria-controls="nav_description" aria-selected="true">Description</button>
                                <button className="nav-link tab_btn" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav_additional_info" type="button" role="tab" aria-controls="nav_additional_info" aria-selected="false">Additional Information</button>
                                <button className="nav-link tab_btn" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav_reviews" type="button" role="tab" aria-controls="nav_reviews" aria-selected="false">Reviews</button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">

                            <div class="tab-pane fade show active" id="nav_description" role="tabpanel" aria-labelledby="nav-home-tab">
                                <h3>The standard Lorem Ipsum passage, used since the 1500</h3>

                                <p>
                                    Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which has since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance.
                                    <br />
                                    Creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which has since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance.
                                </p>

                                <h3>Contrary to popular belief, Lorem Ipsum is not simply random text.</h3>
                                <p>

                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </p>

                            </div>


                            <div class="tab-pane fade show " id="nav_additional_info" role="tabpanel" aria-labelledby="nav-home-tab">
                                <h4 style={{ color: 'red' }}>Feature coming soon...</h4>


                            </div>



                            <div class="tab-pane fade show " id="nav_reviews" role="tabpanel" aria-labelledby="nav-home-tab">

                                <h4 style={{ color: 'red' }}>Feature coming soon...</h4>

                            </div>


                        </div>

                    </div>


                </div>


            </section>
        </>
    );
};

export default SingleProduct;