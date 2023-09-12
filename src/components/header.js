import React from 'react'
import FeatherIcon from 'feather-icons-react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';


export default function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const cart = useSelector((state) => state.cart)
    const category = useSelector((state) => state.categorys.categorys)
    

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
      };
    
    const getTotalQuantity = () => {
        let total = 0
        cart.cart.forEach(item => {
            total += item.quantity
        })
        return total
    }

    return (
        <header className="pb-md-4 pb-0">
            <div className="header-top">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-xxl-3 d-xxl-block d-none">
                            <div className="top-left-header">
                                <i className="iconly-Location icli text-white"></i>
                                <span className="text-white">Tunis, La Marsa 2070</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="top-nav top-header sticky-header">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="navbar-top">
                                <button className="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button"
                                    data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                                    <span className="navbar-toggler-icon">
                                        <i className="fa-solid fa-bars"></i>
                                    </span>
                                </button>
                                <a href="/" className="web-logo nav-logo">
                                    <img src="assets/images/logo/1.png" style={{ width: 230, height: 90 }} alt="" />
                                </a>

                                <div className="middle-box">

                                    <div className="search-box">
                                        <div className="input-group">
                                            <input type="search" className="form-control" placeholder="Chercher ..."
                                                aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <button className="btn" type="button" id="button-addon2">
                                                <FeatherIcon icon={'search'} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="rightside-box">
                                    <div className="search-full">
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <i FeatherIcon icon={'search'} className="font-light"></i>
                                            </span>
                                            <input type="text" className="form-control search-type" placeholder="Search here.." />
                                            <span className="input-group-text close-search">
                                                <i className="font-light"><FeatherIcon icon={'x'} /></i>
                                            </span>
                                        </div>
                                    </div>
                                    <ul className="right-side-menu">
                                        <li className="right-side">
                                            <div className="delivery-login-box">
                                                <div className="delivery-icon">
                                                    <div className="search-box">
                                                        <i data-feather="search"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="right-side">
                                            <a href="/Contact" className="delivery-login-box">
                                                <div className="delivery-icon">
                                                    <i><FeatherIcon icon={'phone-call'} /></i>
                                                </div>
                                                <div className="delivery-detail">
                                                    <h6>Livraison 24/7</h6>
                                                    <h5 href="tel:+21692447177">+216 92 447 177</h5>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="right-side">
                                            <div className="onhover-dropdown header-badge">
                                                <button type="button" className="btn p-0 position-relative header-wishlist" onClick={() => navigate('Cart')}>
                                                    <i><FeatherIcon icon={'shopping-cart'} /></i>
                                                    <p style={{ backgroundColor: "red", borderRadius: 10, width: "17px", color: 'white' }}>{getTotalQuantity() || null}</p>
                                                </button>
                                            </div>
                                        </li>
                                        <li className="right-side onhover-dropdown">
                                            <div className="delivery-login-box">
                                                <div className="delivery-icon">
                                                    <FeatherIcon icon={'user'} />
                                                </div>
                                                <div className="delivery-detail">
                                                    {user ? (
                                                        <>
                                                            <h6>Bienvenue</h6>
                                                            <h5>{user.user.name}</h5>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <h6>Bienvenue</h6>
                                                            <h5>Mon Compte</h5>
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="onhover-div onhover-div-login">
                                                <ul className="user-box-name">
                                                    {user ? (
                                                        <>
                                                            <li className="product-box-contain">
                                                                <a href="#" onClick={onLogout}>Logout</a>
                                                            </li>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <li className="product-box-contain">
                                                                <i></i>
                                                                <a href="Login">Connecter vous</a>
                                                            </li>

                                                            <li className="product-box-contain">
                                                                <a href="/Signup">Creer uncompte</a>
                                                            </li>
                                                            <li className="product-box-contain">
                                                                {/* <a href="/Forgot">Forgot Password</a> */}
                                                            </li>
                                                        </>
                                                    )}

                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid-lg">
                <div className="row">
                    <div className="col-12">
                        <div className="header-nav">


                            <div className="header-nav-middle">
                                <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                                    <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                                        <div className="offcanvas-header navbar-shadow">
                                            <h5>Menu</h5>
                                            <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                            <ul className="navbar-nav">
                                                {category.map((Cat, i) => (
                                                    <li className="nav-item dropdown" key={i}>
                                                        <a
                                                            className="nav-link dropdown-toggle"
                                                            href="javascript:void(0)"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            {Cat.name}
                                                        </a>

                                                        {Cat.subCategory && (
                                                            <ul className="dropdown-menu">
                                                                {Cat.subCategory.map((Ca, j) => (
                                                                    <li key={j}>
                                                                        <a className="dropdown-item" href="index.html">
                                                                            {Ca.name}
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
