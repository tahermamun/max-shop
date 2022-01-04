import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import "./productCard.scss"
import { NavLink } from 'react-router-dom';
import {useAdiContext} from '../../contexts/AdditionalContext'

const ProductCard = ({ product }) => {

    const {addToCartHandler} = useAdiContext()
    const { id,img, title, mainPrice, disPrice } = product

    return (
        <>
            <div className="product_card">
                <div className="card_header">
                    <img src={img} alt="" />
                    <div>
                        <button onClick={()=>addToCartHandler(product)} data-bs-toggle="modal" data-bs-target="#productAdding" className="addCartBtn">
                            <FontAwesomeIcon className="icon" icon={faCartPlus} />
                        </button>
                        <p>On <br />Sale!</p>
                    </div>
                </div>
                <div className="card_body">
                    <div className="review">
                        <FontAwesomeIcon className="icon" icon={faStar} />
                        <FontAwesomeIcon className="icon" icon={faStar} />
                        <FontAwesomeIcon className="icon" icon={faStar} />
                        <FontAwesomeIcon className="icon" icon={faStar} />
                        <FontAwesomeIcon className="icon" icon={faStar} />

                    </div>
                    <NavLink className="product_title"to={`/product/${id}`}>{title}</NavLink>

                    <p className="price"><span>{disPrice}</span>{ mainPrice}</p>
                </div>
            </div>



            <div class="modal fade" id="productAdding" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-top">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-success"> PRODUCT SUCCESSFULLY ADDED TO YOUR SHOPPING CART</h5>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Continue to shipping</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default ProductCard;