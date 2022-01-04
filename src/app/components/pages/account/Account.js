import React from 'react';
import "./account.scss";
import profileImg from '../../../assets/images/profilePic.png'
import { NavLink, useParams } from 'react-router-dom';
import Dashboard from '../../account/dashboard/Dashboard';
import Order from '../../account/order/Order';
import MyCart from '../../account/myCart/MyCart';
import NotFound from '../../common/notFound/NotFound';
import {useAuth} from '../../contexts/AuthContext'


const Account = () => {

    let { acPage } = useParams();
    const {logout}= useAuth()

    return (
        <>
            <section className="account">

                <div className="account_sidebar">
                    <h2>Account</h2>
                    <div className="profile">
                        <img src={profileImg} alt="" />
                        <p>Taher Mamun</p>
                    </div>
                    <hr />
                    <ul className="side_nav" >
                        <li><NavLink activeClassName="active_link" to="/account/dashboard">Dashboard</NavLink></li>
                        <li><NavLink activeClassName="active_link" to="/account/orders">Orders</NavLink></li>
                        <li><NavLink activeClassName="active_link" to="/account/myCart">My Cart</NavLink></li>
                        <li><NavLink activeClassName="active_link" to="/account/review">Review</NavLink></li>
                        <li><NavLink activeClassName="active_link" to="/account/settings">Settings</NavLink></li>
                        <li><button onClick={() =>logout()}>Log Out</button></li>
                    </ul>



                </div>
                <div className="account_body">
                    {
                        acPage === "dashboard" ? <Dashboard /> :
                            acPage === "orders" ? <Order /> :
                                acPage === "myCart" ? <MyCart /> : <NotFound />
                    }
                </div>


            </section>
        </>
    );
};

export default Account;