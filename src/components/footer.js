
import React from 'react'
import FeatherIcon from 'feather-icons-react';

export default function Footer() {
  return (
    <footer className="section-t-space">
    <div className="container-fluid-lg">
        <div className="service-section">
            <div className="row g-3">
                <div className="col-12">
                    <div className="service-contain">
                        <div className="service-box">
                            <div className="service-image">
                                <img src="assets/svg/product.svg"    alt=""/>
                            </div>

                            <div className="service-detail">
                                <h5>Produits Frais</h5>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-image">
                                <img src="assets/svg/delivery.svg"    alt=""/>
                            </div>

                            <div className="service-detail">
                                <h5>Livraison 24/7</h5>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-image">
                                <img src="assets/svg/discount.svg"    alt=""/>
                            </div>

                            <div className="service-detail">
                                <h5>Des grand Promo</h5>
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-image">
                                <img src="assets/svg/market.svg"    alt=""/>
                            </div>

                            <div className="service-detail">
                                <h5>Meilleurs prix</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="main-footer section-b-space section-t-space">
            <div className="row g-md-4 g-3">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="footer-logo">
                        <div className="theme-logo">
                            <a href="/">
                                <img src="assets/images/logo/1.png"    alt=""/>
                            </a>
                        </div>

                        <div className="footer-logo-contain">
                            <p></p>

                            <ul className="address">
                                <li>
                                <FeatherIcon icon={'home'}/>
                                    <a href="javascript:void(0)">Tunis, La Marsa 2088</a>
                                </li>
                                {/* <li>
                                <FeatherIcon icon={'mail'}/>
                                    <a href="javascript:void(0)">support@fastkart.com</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="footer-title">
                        <h4>Categories</h4>
                    </div>

                    <div className="footer-contain">
                        <ul>
                            <li>
                                <a href="/Shop" className="text-content">Vegetables & Fruit</a>
                            </li>
                            <li>
                                <a href="/Shop" className="text-content">Beverages</a>
                            </li>
                            <li>
                                <a href="/Shop" className="text-content">Meats & Seafood</a>
                            </li>
                            <li>
                                <a href="/Shop" className="text-content">Frozen Foods</a>
                            </li>
                            <li>
                                <a href="/Shop" className="text-content">Biscuits & Snacks</a>
                            </li>
                            <li>
                                <a href="/Shop" className="text-content">Grocery & Staples</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-xl col-lg-2 col-sm-3">
                    <div className="footer-title">
                        <h4>Useful Links</h4>
                    </div>

                    <div className="footer-contain">
                        <ul>
                            <li>
                                <a href="/" className="text-content">Home</a>
                            </li>
                            <li>
                                <a href="/Shop" className="text-content">Shop</a>
                            </li>
                            <li>
                                <a href="about-us.html" className="text-content">About Us</a>
                            </li>
                            <li>
                                <a href="blog-list.html" className="text-content">Blog</a>
                            </li>
                            <li>
                                <a href="/Contact" className="text-content">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-xl-2 col-sm-3">
                    <div className="footer-title">
                        <h4>Help Center</h4>
                    </div>

                    <div className="footer-contain">
                        <ul>
                            <li>
                                <a href="order-success.html" className="text-content">Your Order</a>
                            </li>
                            <li>
                                <a href="user-dashboard.html" className="text-content">Your Account</a>
                            </li>
                            <li>
                                <a href="order-tracking.html" className="text-content">Track Order</a>
                            </li>
                            <li>
                                <a href="wishlist.html" className="text-content">Your Wishlist</a>
                            </li>
                            <li>
                                <a href="search.html" className="text-content">Search</a>
                            </li>
                            <li>
                                <a href="faq.html" className="text-content">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="footer-title">
                        <h4>Contact Us</h4>
                    </div>

                    <div className="footer-contact">
                        <ul>
                            <li>
                                <div className="footer-number">
                                <FeatherIcon icon={'phone'}/>
                                    <div className="contact-number">
                                        <h6 className="text-content">Hotline 24/7 :</h6>
                                        <h5>+91 888 104 2340</h5>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="footer-number">
                                    <i data-feather="mail"></i>
                                    <div className="contact-number">
                                        <h6 className="text-content">Email Address :</h6>
                                        <h5>fastkart@hotmail.com</h5>
                                    </div>
                                </div>
                            </li>

                            <li className="social-app mb-0">
                                <h5 className="mb-2 text-content">Download App :</h5>
                                <ul>
                                    <li className="mb-0">
                                        <a href="https://play.google.com/store/apps" target="_blank">
                                            <img src="assets/images/playstore.svg"   
                                                alt=""/>
                                        </a>
                                    </li>
                                    <li className="mb-0">
                                        <a href="https://www.apple.com/in/app-store/" target="_blank">
                                            <img src="assets/images/appstore.svg"   
                                                alt=""/>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>

        <div className="sub-footer section-small-space">
            <div className="reserve">
                <h6 className="text-content">©2023 Tunis Market</h6>
            </div>

            

            <div className="social-link">
                {/* <h6 className="text-content">Stay connected :</h6> */}
                <ul>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_blank">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://in.pinterest.com/" target="_blank">
                            <i className="fa-brands fa-pinterest-p"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
  )
}
