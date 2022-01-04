import React, { useState } from 'react';
import "./topNavbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const TopNavbar = () => {

    const [mobileNav, setMobleNav] = useState(false)

    function mobileNavToggle() {
        if (mobileNav) {
            setMobleNav(false)
        } else {
            setMobleNav(true)
        }
    }

    return (
        <>
            <div className="top_navbar">
                <nav className="main_container clear_fix">


                    <div className="left_nav">
                        <select class="form-select lan_select" aria-label="Default select example">
                            <option selected>EngLish</option>
                            <option value="1">Hindi</option>
                            <option value="2">Arabic</option>

                        </select>


                    </div>



                    <div className="right_nav">
                        <ul className="nav_item">
                            <li><NavLink className="link" to="/">Home</NavLink> </li>
                            <li><NavLink className="link" to="/delivery">Delivery</NavLink> </li>
                            <li><NavLink className="link" to="/legal-notice">Legal Notice</NavLink> </li>
                            <li><NavLink className="link" to="/aboutUs">About Us</NavLink> </li>
                            <li><NavLink className="link" to="/blogs">Blog</NavLink> </li>
                            <li><NavLink className="link" to="/secure-payment">Secure Payment</NavLink> </li>

                        </ul>




                        <div onClick={() => mobileNavToggle()} className="mobile_toggle_btn">
                            <FontAwesomeIcon className="icon" icon={faBars} />
                        </div>
                        {
                            mobileNav ?
                                <ul className="mobile_nav_item" id="mobileNav">
                                    <li className="categories">
                                        <p id="flush-headingOne">
                                            <a class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Categories
                                            </a>
                                        </p>
                                        <ul id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <li>

                                                <NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon" icon={faArrowRight} />Cloth & footWear</NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                    <li><NavLink className="link" to="/">Home</NavLink> </li>
                                    <li><NavLink className="link" to="/shop">Shop</NavLink> </li>

                                    <li><NavLink className="link" to="/delivery">Delivery</NavLink> </li>
                                    <li><NavLink className="link" to="/legal-notice">Legal Notice</NavLink> </li>
                                    <li><NavLink className="link" to="/aboutUs">About Us</NavLink> </li>
                                    <li><NavLink className="link" to="/blogs">Blog</NavLink> </li>
                                    <li><NavLink className="link" to="/secure-payment">Secure Payment</NavLink> </li>
                                </ul> : null
                        }
                    </div>
                </nav>
            </div>

        </>
    );
};

export default TopNavbar;