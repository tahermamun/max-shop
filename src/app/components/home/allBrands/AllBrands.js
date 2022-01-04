import React from 'react';
import fakeBrandData from "../../../../fakeDatabase/fakeBrandData.json"
import "./allBrands.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const AllBrands = () => {
    return (
        <>
            <section class="our_brand_section">
                <div class="title_area clearfix">
                    <h2>Our latest Brand</h2>
                    <div>
                        <div>
                            <button> <FontAwesomeIcon className="icon" icon={faChevronLeft} /></button>
                            <button> <FontAwesomeIcon className="icon" icon={faChevronRight} /></button>
                        </div>
                    </div>
                </div>

                <div class="bard_area">
                    {fakeBrandData.slice(0, 14).map(logo => <img src={logo.img} alt="" />)}

                </div>


            </section>
        </>
    );
};

export default AllBrands;