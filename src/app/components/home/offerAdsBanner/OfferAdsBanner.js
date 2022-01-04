import React from 'react';
import "./offerAdsBanner.scss"
import offer_banner_1 from "../../../assets/images/offer_banner-1.jpg"

const OfferAdsBanner = () => {
    return (
        <>
            <section className="offer_banner_section">
                <div className="offer_banner_img">
                    <img src={offer_banner_1} alt="offer_banner" />
                </div>
                <div className="offer_banner_description">
                    <h2>New Collection 2018</h2>
                    <p>Free Delivery On Your First Order-Only $70.00</p>
                    <button>View Offer</button>
                </div>
            </section>
        </>
    );
};

export default OfferAdsBanner;