import React from 'react';
import "./footer.scss"
import Newsletter from "./Newsletter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMobileAlt, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <>
            <footer className="footer_section">
                <Newsletter/>
                <div className="footer_main">
                    <div className="container footer_area">
                        <div className="left">
                            <FontAwesomeIcon className="icon" icon={faMobileAlt} />
                            <div>
                                <h3>Got Question? call Us 24/7!</h3>
                                <h3>(800) 8001-8588, <br />(0600) 874 548</h3>
                                <p>507-Union Trade ipsum Doler Centre,<br /> Zero Road, Bangladesh.</p>
                                <p>tahermamun5@gmail.com</p>
                            </div>
                        </div>



                        <div className="middle">
                            <div className="middle_1">
                                <h2>Products</h2>
                                <ul>
                                    <li><a href="#">Featured</a></li>
                                    <li><a href="#">New products</a></li>
                                    <li><a href="#">Best sales</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">About us</a></li>

                                </ul>
                            </div>
                            <div className="middle_1">
                                <h2>Our Company</h2>
                                <ul>
                                    <li><a href="#">Delivery</a></li>
                                    <li><a href="#">Leal Notice</a></li>
                                    <li><a href="#">Terms and condition of use</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                    <li><a href="#">Secure payment</a></li>
                                </ul>
                            </div>

                        </div>


                        <div className="right">
                            <i className="fas fa-money-check-alt"></i>
                            <FontAwesomeIcon className="icon" icon={faMoneyCheckAlt} />
    
                            <div>
                                <div>
                                    <h2>We are Using Safe Payments</h2>
                                    <img src="https://i.ibb.co/r4skg0Z/american-express.png" alt="" />
                                    <img src="https://i.ibb.co/jggDYdg/carte-bleue.png" alt="" />
                                    <img src="https://i.ibb.co/pLRKKmW/master-card.png" alt="" />
                                    <img src="https://i.ibb.co/5FPvMLh/paypal.png" alt="" />
                                    <img src="https://i.ibb.co/5r7Lg5f/visa.png" alt="" />
                                </div>

                                <div>
                                    <h2>Downloads Apps</h2>
                                    <img src="https://i.ibb.co/2jYMQMF/apple-store.png" alt="" />
                                    <img src="https://i.ibb.co/px2Y8sx/google-store.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom_footer">
                    <p>© 2021 - Ecommerce software by tahermamun5@gmail.com</p>
                </div>
            </footer>

        </>
    );
};

export default Footer;