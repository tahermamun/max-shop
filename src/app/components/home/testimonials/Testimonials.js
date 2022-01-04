import React from 'react';
import "./testimonials.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAltH, faQuoteLeft,faStar, faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import testimonial_1 from "../../../assets/images/testimonial_1.jpg"

const Testimonials = () => {
    return (
        <>
              <section class="testimonial_section">
                <div class="testimonial_upper_style">
                   <p> <FontAwesomeIcon className="icon" icon={faArrowsAltH} /></p>
                </div>

                <div class="testimonials">
                    <button>  <FontAwesomeIcon className="icon" icon={faChevronLeft} /> </button>
                    <div class="testimonial">
                        <div class="feedback_header">
                            <img src={testimonial_1} alt=""/>
                             <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
                        </div>
                        <div class="feedback_body">
                            <div class="review">
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />
                             <FontAwesomeIcon className="icon" icon={faStar} />

                            </div>
                            <h2>Alexander Harvard</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla illo necessitatibus maxime iusto sit iure temporibus ipsa quam nemo modi veritatis, consequatur tenetur voluptas odit in nisi obcaecati facere asperiores.</p>
                        </div>

                    </div>



                    <button>  <FontAwesomeIcon className="icon" icon={faChevronRight} />  </button>
                </div>




            </section>
        </>
    );
};

export default Testimonials;