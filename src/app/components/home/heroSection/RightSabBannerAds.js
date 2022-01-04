import React from 'react';
import Subbanner_1 from '../../../assets/images/sub_banner_1.jpg'
import Subbanner_2 from '../../../assets/images/sub_banner_2.jpg'
import "./rightSabBannerAds.scss"
const RightSabBannerAds = () => {
    return (
        <>
            <div className="right_sabbanner_ads">
                <div className="ads_card">
                    <img src={Subbanner_1} alt="ads_1" />
                    <p>Sale up to 30% off <button>BUY NOW</button></p>
                </div>

                <div className="ads_card">
                    <img src={Subbanner_2} alt="ads_1" />
                    <p>Sale up to 30% off <button>BUY NOW</button></p>
                </div>
            </div>
        </>
    );
};

export default RightSabBannerAds;