import React from 'react';
import "./newsletter.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGooglePlus, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';



const Newsletter = () => {
    return (
        <>
        
        <div className="newsletter_area">
            <div className="container newsletter">
                <div className="left">
                    <FontAwesomeIcon className="icon" icon={faEnvelopeOpenText} />
                    <div>
                        <h2>Subscribe To Our Newsletter!!</h2>
                        <p>Be aware of the latest news, special offers and discounts
                        </p>
                    </div>
                </div>
                <div className="middle">
                    <input type="text" placeholder="enter your email address here...."/>
                    <button>
                    <FontAwesomeIcon className="icon" icon={faPaperPlane} />

                    </button>
                </div>

                <div className="right">
                    <a href="#"> <FontAwesomeIcon className="icon" icon={faFacebook} /></a>
                    <a href="#"> <FontAwesomeIcon className="icon" icon={faTwitter} /></a>
                    <a href="#"> <FontAwesomeIcon className="icon" icon={faYoutube} /></a>
                    <a href="#"> <FontAwesomeIcon className="icon" icon={faGooglePlus} /></a>
                    <a href="#"> <FontAwesomeIcon className="icon" icon={faInstagram} /></a>
                </div>

            </div>
        </div>
    
        </>
    );
};

export default Newsletter;