import React from 'react';
import "./ShopCategory.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';


const ShopCategory = () => {
    return (
        <>
            <div className="shop_category">
                <p>
                    <FontAwesomeIcon className="icon" icon={faBars} />
                    SHOP BY CATEGORY</p>
                <ul>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon" icon={faArrowRight} />Cloth & footWear</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon" icon={faArrowRight} />Kitchen Appiance</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon" icon={faArrowRight} />New Arrivals</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon" icon={faArrowRight} />Laptop & Computer</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon" icon={faArrowRight} />Mobile & Cover</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon" icon={faArrowRight} />Accessories</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon" icon={faArrowRight} />Interior Design</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon" icon={faArrowRight} />Game & Sports</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon" icon={faArrowRight} />Furniture & Lighting</NavLink></li>
                    <li><NavLink className="link" to="/shop"> <FontAwesomeIcon className="icon" icon={faArrowRight} />More</NavLink></li>
                </ul>
            </div>
        </>
    );
};

export default ShopCategory;