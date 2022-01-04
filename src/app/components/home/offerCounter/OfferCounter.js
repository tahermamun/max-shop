import React from 'react';
import "./offerCounter.scss"
import counterLeftBanner from "../../../assets/images/left-right_offer.jpg"
import counterRightBanner from "../../../assets/images/right-offer_banner.jpg"
import counterProduct from "../../../assets/images/Counter_product_1.jpg"
import Fade from 'react-reveal/Fade';


const OfferCounter = () => {
    return (
        <>
            <section class="product_offer_counter_section">

                <div class="offer_counter_sidebar offer_counter_sidebar1">
                    <Fade left >

                        <img src={counterLeftBanner} alt="" />
                        <div>
                            <p>ONLY FOR TO DAYS!</p>
                            <h5>GRAB OFFER UP TO<br /> 30% OFF</h5>
                        </div>
                    </Fade >
                </div>

                <div class="middle_offer_counter">

                    <div class="weekend">
                        Weekly <br />Deal
                    </div>
                    <div class="counter_card">
                        <div class="left">
                            <h3>Occaecat Voluptas</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem saepe sequi, repellat
                            </p>
                            <div class="start">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p class="price">
                                <span>$109.67</span>
                                <span>-6%</span>
                                <span>$92.87</span>
                            </p>
                            <div class="counter">
                                <p>
                                    <span>439</span> Days
                                </p>
                                <p>
                                    <span>10</span> Hours
                                </p>
                                <p>
                                    <span>53</span> Min
                                </p>
                                <p>
                                    <span>39</span> Sec
                                </p>
                            </div>
                            <button>Add to cart</button>
                        </div>
                        <div class="right">
                            <img src={counterProduct} alt="" srcset="" />
                        </div>
                    </div>
                </div>

                <div class="offer_counter_sidebar offer_counter_sidebar2">
                    <Fade right >

                        <img src={counterRightBanner} alt="" />
                        <div>
                            <p>CLOTH BIG OFFER</p>
                            <h3>20% OFF</h3>
                            <button>VIEW MORE</button>
                        </div>
                    </Fade >

                </div>


            </section>



        </>
    );
};

export default OfferCounter;