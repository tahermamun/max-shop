import React, { useEffect } from 'react';
import HeroSection from '../../home/heroSection/HeroSection';
import OfferAdsBanner from '../../home/offerAdsBanner/OfferAdsBanner'
import OfferCounter from '../../home/offerCounter/OfferCounter';
import LatestProducts from "../../home/latestProducts/LatestProducts"
import FeaturedSection from "../../home/featuredSection/FeaturedSection"
import FeaturedProducts from '../../home/featuredProducts/FeaturedProducts';
import Testimonials from '../../home/testimonials/Testimonials';
import BlogSection from '../../home/blogSection/BlogSection';
import AllBrands from '../../home/allBrands/AllBrands';
import Fade from 'react-reveal/Fade';

const Home = () => {

    return (
        <>
            <HeroSection />
            <Fade bottom>
                <OfferAdsBanner />
            </Fade >
            <OfferCounter />
            <Fade bottom>
                <LatestProducts />
            </Fade >
            <FeaturedSection />
            <Fade bottom>
                <FeaturedProducts />
            </Fade >
            <Testimonials />
            <Fade bottom>
                <BlogSection />
            </Fade >
            <Fade bottom>
                <AllBrands />
            </Fade >
        </>
    );
};

export default Home;