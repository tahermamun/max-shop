import React, { useState } from 'react';
import "./mainNavbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faCartArrowDown, faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { useAdiContext } from '../../contexts/AdditionalContext';
import { useAuth } from '../../contexts/AuthContext';

const MainNavbar = () => {
    const { cart } = useAdiContext()
    const { currentUser } = useAuth()

    const [mobileSearch, setMobileSearch] = useState(false)
    const mobileSearchInput = () => {
        if (mobileSearch) {
            setMobileSearch(false)
        } else {
            setMobileSearch(true)
        }
    }
    return (
        <>

            <div className="main_header">
                <div className="main_container">

                    <div className="left_header">

                        <NavLink to="/"><span>Max</span>Shop</NavLink>

                        </div>

                    <div className="middle_header">
                        <input type="text" />
                        <button>Search</button>
                    </div>
                    <div className="right_header">
                        <a className="mobile_search_option link" href="#">
                            <FontAwesomeIcon onClick={() => mobileSearchInput()} className="icon" icon={faSearch} />
                            {mobileSearch ? <div className="moblie_search_input showMobileSearchInput" id="mobileSearchInput">
                                <input type="text" placeholder="Search here...." />
                                <button>
                                    <FontAwesomeIcon className="icon" icon={faSearch} />
                                </button>
                            </div> : null

                            }
                        </a>

                        {
                            !currentUser ? <NavLink className="link" to="/signIn">
                                <FontAwesomeIcon className="icon" icon={faUserPlus} />
                                <span>
                                    Sign In <br />
                                    & REGISTER
                                </span>
                            </NavLink > :
                                <NavLink className="link" to="/account/dashboard">
                                    <FontAwesomeIcon className="icon" icon={faUserAlt} />
                                    <span>
                                        My Account
                                    </span>
                                </NavLink >
                        }

                      




                        <NavLink className="link" to="/cart">
                            <FontAwesomeIcon className="icon" icon={faCartArrowDown} />
                            <span>
                              <span style={{color:"Black", background:'yellow',lineHeight:'0',padding:'3px',borderRadius:"50px"}}> {cart.length}</span>
                                <br />
                                MY CART
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainNavbar;