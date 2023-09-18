import React from "react";
import FeatherIcon from 'feather-icons-react';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../features/cart/cartSlice';
import { useState } from "react";
import wishListservices from "../services/wishListservices";



export default function Product({ product, key }) {
    const dispatch = useDispatch()
    // const user = useSelector((state) => state.auth.user.user);

    const [id, setId] = useState(product._id);
    const [price, setPrice] = useState(product.price);
    const [promoprice, setPromoprice] = useState(product.promoprice);
    const [imageUrls, setImageUrls] = useState(product.imageUrls[0]);
    const [name, setName] = useState(product.name);
    const [color, setColor] = useState('')


    const addToWishList = (id, productId) => {
        // console.log(user,'idSUUUUSSSSERRR');
        console.log(id, 'id to update', productId)
        if (typeof (id) === "string") {
            wishListservices.addToWishList(id, productId).then(res => {
                console.log(res, "================= res ")
                // data = data.filter(user => user.id !== id)
                console.log(res.statusText, 'status TEXT after UPDATE');
                setColor("#FF0000")
            });
        } else {
            console.log('check id')
        }
    }

    const AddProduct = (body) => {
        // console.log('id to update',body)
        // if (body){
        //     productsservices.createProducts(body).then( res => {
        //     // data = data.filter(user => user.id !== id)
        //     console.log(res,'after update data');
        //     setShow(false)
        // });
        // }else {
        //   console.log('check id')
        // }

    }
    return (

        <div>
            <div className="product-box-3 h-100 wow fadeInUp" key={key}>
                {product ?
                    <>
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src={product.imageUrls[0]} alt="" />
                                </a>

                                
                            </div>
                        </div>
                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name"></span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">{product.name}</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">{product.description}</p>
                            
                                <h5 className="unit">{product.QtePerUnit} par unité</h5>
                                <h5 className="price"><span className="theme-color">{product.promoprice} TND</span> <del>{product.price} TND</del>
                                </h5>
                                <div className="add-to-cart-box bg-white">
                                    <button className="btn btn-add-cart addcart-button" onClick={() => dispatch(addToCart({
                                        id, name, imageUrls, price, promoprice
                                    }))}>Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray"
                                                data-type="plus" data-field="">
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>Loading</>}

            </div>
        </div>
    )
}
