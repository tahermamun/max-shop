import React from 'react';
import "./heroSection.scss"
import MainSidebarAllCategory from '../../common/sidebar/shopCategory/ShopCategory';
import RightSabBannerAds from './RightSabBannerAds';
import MainSlider from './MainSlider';

const HeroSection = () => {
    return (
        <>
            {/* hero section start  */}
            <section className="hero_section">
                {/*main  sidebar category start */}
                <MainSidebarAllCategory />
                {/*main sidebar category end */}

                {/* main carousel  */}
                <div className="main_carousel">
                    {/* <img src={Silder_1} alt="silder_1" /> */}
                    <MainSlider/>
                </div>
                {/* right sab banner ads  */}
                <RightSabBannerAds />

            </section>
            {/* hero section end */}
        </>
    );
};

export default HeroSection;