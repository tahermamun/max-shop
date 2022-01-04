import React, { useState } from 'react';
import ValueInput from '../../common/input/ValueInput';
import './checkout.scss'
import ShippingCartSummery from '../../common/shippingCartSummary/ShippingCartSummary'


const Checkout = () => {
    const [conInfo, setConInfo] = useState('')

    const onChangeInfoHandler = (e) => {

    
        const orderDetails = { ...conInfo };
        orderDetails[e.target.name] = e.target.value;
        setConInfo(orderDetails)
    }
    console.log(conInfo);

    const [paymentOption, setPaymentOption] = useState(true)

    const handleContinuePayment = () => {


        setPaymentOption(false)
    }
    return (
        <>

            <section class="checkout_cart_page_area">

                <div class="shipping_details_area">


                    {
                        paymentOption ? <form action="">

                            <h2>Personal Information</h2>

                            <ValueInput onChange={(e) => onChangeInfoHandler(e)} label="Email" disabled value="tahermamun5@gmail.com" name="userEmail" type="text" />
                            <ValueInput onChange={(e) => onChangeInfoHandler(e)} label="Name" name="userName" type="text" placeholder='Enter your name...' required />
                            <ValueInput onChange={(e) => onChangeInfoHandler(e)} label="Phone" name="userPhone" type="text" placeholder="Enter your phone number..." required />

                            <h2>Shipping Address</h2>

                            <ValueInput onChange={(e) => onChangeInfoHandler(e)} label="Name" name="shippingName" type="text" placeholder='Enter your name...' />
                            <ValueInput onChange={(e) => onChangeInfoHandler(e)} label="Street and House Number" name="streetAndHouseNo" type="text" placeholder="Enter your street and house number..." />
                            <ValueInput onChange={(e) => onChangeInfoHandler(e)} label="Address" name="shippingAddress" type="text" placeholder="Enter your address..." />
                            <ValueInput onChange={(e) => onChangeInfoHandler(e)} label="Zip/Postal Code" name="shippingZipPostalCode" type="text" placeholder="Enter your address..." />
                            <ValueInput onChange={(e) => onChangeInfoHandler(e)} label="City" name="shippingCity" type="text" placeholder="Enter your address..." />

                            <div className='input_option_country'>
                                <label for="shippingCountry">Country</label>
                                <select onChange={(e) => onChangeInfoHandler(e)} id="shippingCountry" name="shippingCountry" required>
                                    <option value="" selected disabled hidden>Select Country</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Bangladesh">United State</option>
                                </select>
                            </div>


                            <input type="submit" onClick={() => setPaymentOption(false)} className="button" value="Process to Continue" />

                        </form> :

                            <div className="information_show_and_payment_area">

                                <h2>Contact Information</h2>
                                <p>Name: <span>{conInfo.userName}</span></p>
                                <p>Email: <span>{conInfo.userEmail}</span></p>
                                <p>Phone: <span>+{conInfo.userPhone}</span></p>
                                <hr />
                                <h2>Shipping Address</h2>
                                <p>Name: <span>{conInfo.shippingName}</span></p>
                                <p>Street and House Number: <span>{conInfo.streetAndHouseNo}</span></p>
                                <p>Address: <span>{conInfo.shippingAddress}</span></p>
                                <p>Zip/Postal Code: <span>+{conInfo.shippingZipPostalCode}</span></p>
                                <p>City: <span>+{conInfo.shippingCity}</span></p>
                                <p>Country: <span>+{conInfo.shippingCountry}</span></p>
                                <hr />

                                <h2>Shipping Method</h2>

                                <p className="shippingRate">
                                    <div>
                                        <input type="radio" checked />
                                        Local Shipping
                                    </div>
                                    <span>Free</span>
                                </p>

                                <input type="button" onClick={() => handleContinuePayment()} className="button" value="Continue Payment" data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
                                <input type="button" onClick={() => setPaymentOption(true)} className="button_return" value="Return to Checkout" />

                            </div>



                    }



                </div>
                <ShippingCartSummery button={false} />
            </section>


            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Pay Now</h5>
                        </div>
                        <div class="modal-body">
                            <p>
                                This store can’t accept payments right now.
                            </p>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>







            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>there will be a popular product section</h1>

        </>
    );
};

export default Checkout;