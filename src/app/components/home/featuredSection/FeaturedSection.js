import React from 'react';
import "./featuredSection.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import middle_featured_1 from "../../../assets/images/middle_featured_1.jpg"
import middle_featured_2 from "../../../assets/images/middle_featured_2.jpg"
import right_featured from "../../../assets/images/right_featured.jpg"
import Fade from 'react-reveal/Fade';

const FeaturedSection = () => {
    return (
        <>
            <section className="featured_section">
                <Fade left>
                    <div className="left">
                        <div className="card">
                            <p className="icons">
                                <FontAwesomeIcon className="icon" icon={faTruck} />

                            </p>
                            <div>
                                <h4>Fast Delivery</h4>
                                <p>Cras Imperdiet Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className="card">
                            <p className="icons">
                                <FontAwesomeIcon className="icon" icon={faTruck} />
                            </p>
                            <div>
                                <h4>Fast Delivery</h4>
                                <p>Cras Imperdiet Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className="card">
                            <p className="icons">
                                <FontAwesomeIcon className="icon" icon={faTruck} />
                            </p>
                            <div>
                                <h4>Fast Delivery</h4>
                                <p>Cras Imperdiet Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className="card">
                            <p className="icons">
                                <FontAwesomeIcon className="icon" icon={faTruck} />

                            </p>
                            <div>
                                <h4>Fast Delivery</h4>
                                <p>Cras Imperdiet Lorem Ipsum</p>
                            </div>
                        </div>

                    </div>
                </Fade>


                <div className="middle">
                <Fade bottom>

                    <div>
                        <img src={middle_featured_1} alt="" />
                        <div className="upper_div">
                            <p>
                                Get Discount
                                <span>
                                    30% off
                                </span>
                                <br />
                                <a href="#">View More</a>
                            </p>
                        </div>
                    </div>
                    </Fade>

                    <Fade bottom>

                    <div>
                        <img src={middle_featured_2} alt="" />
                        <div className="bottom_div">
                            <p style={{ fontWeight: "700" }}>
                                Clothes
                                <br />
                                <span style={{ fontWeight: "300" }}>
                                    Sale 20% Off
                                </span>
                                <br />
                                <a href="#">View More</a>
                            </p>
                        </div>
                    </div>
                    </Fade>



                </div>
                <Fade right>

                <div className="right">
                    <img src={right_featured} alt="" />
                    <div>
                        <h3>DISCOUNT 20% OFF</h3>
                        <h1>ELECTRONICS SALE</h1>
                        <button>Shop Now</button>
                    </div>

                </div>
                </Fade>


            </section>
        </>
    );
};

export default FeaturedSection;