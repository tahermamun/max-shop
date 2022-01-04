import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Home from './app/components/pages/homepage/Home'
import ShippingCart from './app/components/pages/shippingCart/ShippingCart'
import Shop from './app/components/pages/shop/Shop'
import Blog from './app/components/pages/blog/Blog'
import "./app/style/global.scss"
import Layout from './app/components/common/Layout';
import NotFound from './app/components/common/notFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './app/components/pages/checkout/Checkout';
import Payment from './app/components/pages/payment/Payment';
import LoginPage from './app/components/pages/login/LoginPage';
import Account from './app/components/pages/account/Account';
import SingleProduct from './app/components/pages/singleProduct/SingleProduct';
import SingleBlog from './app/components/pages/singleBlog/SingleBlog';
import AboutUs from './app/components/pages/normalPages/AboutUs';
import Delivery from './app/components/pages/normalPages/Delivery';
import LegalNotice from './app/components/pages/normalPages/LegalNotice';
import SecurePayment from './app/components/pages/normalPages/SecurePayment';
import TermsAndCondition from './app/components/pages/normalPages/TermsAndCondition';
import { AuthProvider } from './app/components/contexts/AuthContext'
import { AdditionalProvider } from './app/components/contexts/AdditionalContext'
import PrivateRoute from './app/components/Routes/PrivateRoute'


function App() {

    // useEffect(() => {
    //     alert('As soon As possible, All Feature will be available')
    // }, [])
    return (
        <>
            <Router>
                <AdditionalProvider>
                    <AuthProvider>
                        <Layout>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/home" component={Home} />
                                <Route exact path="/cart" component={ShippingCart} />
                                <Route exact path="/shop" component={Shop} />
                                <Route exact path="/blogs" component={Blog} />
                                <PrivateRoute exact path="/checkout" component={Checkout} />
                                <Route exact path="/signIn" component={LoginPage} />
                                <PrivateRoute exact path="/payment" component={Payment} />
                                <Route exact path="/product/:productId" component={SingleProduct} />
                                <Route exact path="/blog" component={SingleBlog} />
                                <Route exact path="/aboutUs" component={AboutUs} />
                                <Route exact path="/delivery" component={Delivery} />
                                <Route exact path="/secure-payment" component={SecurePayment} />
                                <Route exact path="/terms-and-condition" component={TermsAndCondition} />
                                <Route exact path="/legal-notice" component={LegalNotice} />
                                <PrivateRoute exact path="/account/:acPage" component={Account} />
                                <Route exact path="**" component={NotFound} />
                            </Switch>
                        </Layout>
                    </AuthProvider>
                </AdditionalProvider>
            </Router>
        </>
    )
}

export default App
