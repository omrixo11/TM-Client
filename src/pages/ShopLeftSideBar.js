import React from 'react'
import Product from '../components/product';
import Carousel from 'react-bootstrap/Carousel';
import FeatherIcon from 'feather-icons-react';




export default function ShopLeftSideBar() {


  return (
    <>
    <section className="breadscrumb-section pt-0">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="breadscrumb-contain">
                        <h2>Shop</h2>
                        <nav>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a href="index.html">
                                        <i className="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Shop</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>


  
    <Carousel>
      <Carousel.Item interval={3000}>
      <div>
         <img src="assets/images/shop/1.jpg" alt=""/>
      </div>
        <Carousel.Caption>
        <div className="banner-detail p-center-right position-relative shop-banner ms-auto banner-small">
                <div>
                    <h2>Healthy, nutritious & Tasty Fruits & Veggies</h2>
                        <h3>Save upto 50%</h3>
                 </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div>
         <img src="assets/images/shop/1.jpg"  alt=""/>
      </div>
        <Carousel.Caption>
        <div className="banner-detail p-center-right position-relative shop-banner ms-auto banner-small">
                <div>
                    <h2>Healthy, nutritious & Tasty Fruits & Veggies</h2>
                        <h3>Save upto 90%</h3>
                 </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <div>
         <img src="assets/images/shop/1.jpg" alt=""/>
      </div>
        <Carousel.Caption>
        <div className="banner-detail p-center-right position-relative shop-banner ms-auto banner-small">
                <div>
                    <h2>Healthy, nutritious & Tasty Fruits & Veggies</h2>
                        <h3>Save upto 60%</h3>
                 </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
             
    
    
   
    <section className="section-b-space shop-section">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-custome-3">
                    <div className="left-box wow fadeInUp">
                        <div className="shop-left-sidebar">
                            <div className="back-button">
                                <h3><i className="fa-solid fa-arrow-left"></i> Back</h3>
                            </div>

                            <div className="filter-category">
                                <div className="filter-title">
                                    <h2>Filters</h2>
                                    <a href="javascript:void(0)">Clear All</a>
                                </div>
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)">Vegetable</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Fruit</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Fresh</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Milk</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Meat</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="accordion custome-accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            <span>Categories</span>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne">
                                        <div className="accordion-body">
                                            <div className="form-floating theme-form-floating-2 search-box">
                                                <input type="search" className="form-control" id="search"
                                                    placeholder="Search .."/>
                                                <label for="search">Search</label>
                                            </div>

                                            <ul className="category-list custom-padding custom-height">
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox" id="fruit"/>
                                                        <label className="form-check-label" for="fruit">
                                                            <span className="name">Fruits & Vegetables</span>
                                                            <span className="number">(15)</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox" id="cake"/>
                                                        <label className="form-check-label" for="cake">
                                                            <span className="name">Bakery, Cake & Dairy</span>
                                                            <span className="number">(12)</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox" id="behe"/>
                                                        <label className="form-check-label" for="behe">
                                                            <span className="name">Beverages</span>
                                                            <span className="number">(20)</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox" id="snacks"/>
                                                        <label className="form-check-label" for="snacks">
                                                            <span className="name">Snacks & Branded Foods</span>
                                                            <span className="number">(05)</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox" id="beauty"/>
                                                        <label className="form-check-label" for="beauty">
                                                            <span className="name">Beauty & Household</span>
                                                            <span className="number">(30)</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox" id="pets"/>
                                                        <label className="form-check-label" for="pets">
                                                            <span className="name">Kitchen, Garden & Pets</span>
                                                            <span className="number">(50)</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox" id="egg"/>
                                                        <label className="form-check-label" for="egg">
                                                            <span className="name">Eggs, Meat & Fish</span>
                                                            <span className="number">(19)</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox" id="food"/>
                                                        <label className="form-check-label" for="food">
                                                            <span className="name">Gourment & World Food</span>
                                                            <span className="number">(30)</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox" id="care"/>
                                                        <label className="form-check-label" for="care">
                                                            <span className="name">Baby Care</span>
                                                            <span className="number">(20)</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox" id="fish"/>
                                                        <label className="form-check-label" for="fish">
                                                            <span className="name">Fish & Seafood</span>
                                                            <span className="number">(10)</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox" id="marinades"/>
                                                        <label className="form-check-label" for="marinades">
                                                            <span className="name">Marinades</span>
                                                            <span className="number">(05)</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox" id="lamb"/>
                                                        <label className="form-check-label" for="lamb">
                                                            <span className="name">Mutton & Lamb</span>
                                                            <span className="number">(09)</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox" id="other"/>
                                                        <label className="form-check-label" for="other">
                                                            <span className="name">Port & other Meats</span>
                                                            <span className="number">(06)</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox" id="pour"/>
                                                        <label className="form-check-label" for="pour">
                                                            <span className="name">Pourltry</span>
                                                            <span className="number">(01)</span>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox" id="salami"/>
                                                        <label className="form-check-label" for="salami">
                                                            <span className="name">Sausages, bacon & Salami</span>
                                                            <span className="number">(03)</span>
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            <span>Food Preference</span>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse show"
                                        aria-labelledby="headingTwo">
                                        <div className="accordion-body">
                                            <ul className="category-list custom-padding">
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox" id="veget"/>
                                                        <label className="form-check-label" for="veget">
                                                            <span className="name">Vegetarian</span>
                                                            <span className="number">(08)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox" id="non"/>
                                                        <label className="form-check-label" for="non">
                                                            <span className="name">Non Vegetarian</span>
                                                            <span className="number">(09)</span>
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                            <span>Price</span>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse show"
                                        aria-labelledby="headingThree">
                                        <div className="accordion-body">
                                            <div className="range-slider">
                                                <input type="text" className="js-range-slider" value=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                            aria-expanded="false" aria-controls="collapseSix">
                                            <span>Rating</span>
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse show"
                                        aria-labelledby="headingSix">
                                        <div className="accordion-body">
                                            <ul className="category-list custom-padding">
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"/>
                                                        <div className="form-check-label">
                                                            <ul className="rating">
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>
                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                            </ul>
                                                            <span className="text-content">(5 Star)</span>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"/>
                                                        <div className="form-check-label">
                                                            <ul className="rating">
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                            </ul>
                                                            <span className="text-content">(4 Star)</span>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"/>
                                                        <div className="form-check-label">
                                                            <ul className="rating">
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                            </ul>
                                                            <span className="text-content">(3 Star)</span>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"/>
                                                        <div className="form-check-label">
                                                            <ul className="rating">
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                            </ul>
                                                            <span className="text-content">(2 Star)</span>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"/>
                                                        <div className="form-check-label">
                                                            <ul className="rating">
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                                <li>
                                                                <FeatherIcon icon={'star'}/>                                                                </li>
                                                            </ul>
                                                            <span className="text-content">(1 Star)</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                            aria-expanded="false" aria-controls="collapseFour">
                                            <span>Discount</span>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse show"
                                        aria-labelledby="headingFour">
                                        <div className="accordion-body">
                                            <ul className="category-list custom-padding">
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault"/>
                                                        <label className="form-check-label" for="flexCheckDefault">
                                                            <span className="name">upto 5%</span>
                                                            <span className="number">(06)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault1"/>
                                                        <label className="form-check-label" for="flexCheckDefault1">
                                                            <span className="name">5% - 10%</span>
                                                            <span className="number">(08)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault2"/>
                                                        <label className="form-check-label" for="flexCheckDefault2">
                                                            <span className="name">10% - 15%</span>
                                                            <span className="number">(10)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault3"/>
                                                        <label className="form-check-label" for="flexCheckDefault3">
                                                            <span className="name">15% - 25%</span>
                                                            <span className="number">(14)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault4"/>
                                                        <label className="form-check-label" for="flexCheckDefault4">
                                                            <span className="name">More than 25%</span>
                                                            <span className="number">(13)</span>
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                            aria-expanded="false" aria-controls="collapseFive">
                                            <span>Pack Size</span>
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse show"
                                        aria-labelledby="headingFive">
                                        <div className="accordion-body">
                                            <ul className="category-list custom-padding custom-height">
                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault5"/>
                                                        <label className="form-check-label" for="flexCheckDefault5">
                                                            <span className="name">400 to 500 g</span>
                                                            <span className="number">(05)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault6"/>
                                                        <label className="form-check-label" for="flexCheckDefault6">
                                                            <span className="name">500 to 700 g</span>
                                                            <span className="number">(02)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault7"/>
                                                        <label className="form-check-label" for="flexCheckDefault7">
                                                            <span className="name">700 to 1 kg</span>
                                                            <span className="number">(04)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault8"/>
                                                        <label className="form-check-label" for="flexCheckDefault8">
                                                            <span className="name">120 - 150 g each Vacuum 2 pcs</span>
                                                            <span className="number">(06)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault9"/>
                                                        <label className="form-check-label" for="flexCheckDefault9">
                                                            <span className="name">1 pc</span>
                                                            <span className="number">(09)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault10"/>
                                                        <label className="form-check-label" for="flexCheckDefault10">
                                                            <span className="name">1 to 1.2 kg</span>
                                                            <span className="number">(06)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault11"/>
                                                        <label className="form-check-label" for="flexCheckDefault11">
                                                            <span className="name">2 x 24 pcs Multipack</span>
                                                            <span className="number">(03)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault12"/>
                                                        <label className="form-check-label" for="flexCheckDefault12">
                                                            <span className="name">2x6 pcs Multipack</span>
                                                            <span className="number">(04)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault13"/>
                                                        <label className="form-check-label" for="flexCheckDefault13">
                                                            <span className="name">4x6 pcs Multipack</span>
                                                            <span className="number">(05)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault14"/>
                                                        <label className="form-check-label" for="flexCheckDefault14">
                                                            <span className="name">5x6 pcs Multipack</span>
                                                            <span className="number">(09)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault15"/>
                                                        <label className="form-check-label" for="flexCheckDefault15">
                                                            <span className="name">Combo 2 Items</span>
                                                            <span className="number">(10)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault16"/>
                                                        <label className="form-check-label" for="flexCheckDefault16">
                                                            <span className="name">Combo 3 Items</span>
                                                            <span className="number">(14)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault17"/>
                                                        <label className="form-check-label" for="flexCheckDefault17">
                                                            <span className="name">2 pcs</span>
                                                            <span className="number">(19)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault18"/>
                                                        <label className="form-check-label" for="flexCheckDefault18">
                                                            <span className="name">3 pcs</span>
                                                            <span className="number">(14)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault19"/>
                                                        <label className="form-check-label" for="flexCheckDefault19">
                                                            <span className="name">2 pcs Vacuum (140 g to 180 g each
                                                                )</span>
                                                            <span className="number">(13)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault20"/>
                                                        <label className="form-check-label" for="flexCheckDefault20">
                                                            <span className="name">4 pcs</span>
                                                            <span className="number">(18)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault21"/>
                                                        <label className="form-check-label" for="flexCheckDefault21">
                                                            <span className="name">4 pcs Vacuum (140 g to 180 g each
                                                                )</span>
                                                            <span className="number">(07)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault22"/>
                                                        <label className="form-check-label" for="flexCheckDefault22">
                                                            <span className="name">6 pcs</span>
                                                            <span className="number">(09)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault23"/>
                                                        <label className="form-check-label" for="flexCheckDefault23">
                                                            <span className="name">6 pcs carton</span>
                                                            <span className="number">(11)</span>
                                                        </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input className="checkbox_animated" type="checkbox"
                                                            id="flexCheckDefault24"/>
                                                        <label className="form-check-label" for="flexCheckDefault24">
                                                            <span className="name">6 pcs Pouch</span>
                                                            <span className="number">(16)</span>
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-custome-9">
                    <div className="show-button">
                        <div className="filter-button-group mt-0">
                            <div className="filter-button d-inline-block d-lg-none">
                                <a><i className="fa-solid fa-filter"></i> Filter Menu</a>
                            </div>
                        </div>

                        <div className="top-filter-menu">
                            <div className="category-dropdown">
                                <h5 className="text-content">Sort By :</h5>
                                <div className="dropdown">
                                    <button className="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown">
                                        <span>Most Popular</span> <i className="fa-solid fa-angle-down"></i>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <a className="dropdown-item" id="pop" href="javascript:void(0)">Popularity</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" id="low" href="javascript:void(0)">Low - High
                                                Price</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" id="high" href="javascript:void(0)">High - Low
                                                Price</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" id="rating" href="javascript:void(0)">Average
                                                Rating</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" id="aToz" href="javascript:void(0)">A - Z Order</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" id="zToa" href="javascript:void(0)">Z - A Order</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" id="off" href="javascript:void(0)">% Off - Hight To
                                                Low</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid-option d-none d-md-block">
                                <ul>
                                    <li className="three-grid">
                                        <a href="javascript:void(0)">
                                            <img src="assets/svg/grid-3.svg" alt=""/>
                                        </a>
                                    </li>
                                    <li className="grid-btn d-xxl-inline-block d-none active">
                                        <a href="javascript:void(0)">
                                            <img src="assets/svg/grid-4.svg" alt=""/>
                                            <img src="assets/svg/grid.svg"  alt=""/>
                                        </a>
                                    </li>
                                    <li className="list-btn">
                                        <a href="javascript:void(0)">
                                            <img src="assets/svg/list.svg" alt=""/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
                       
                       <Product/>
                       <Product/>
                       <Product/>
                       <Product/>
                       <Product/>
                       <Product/>
                       <Product/>

                        
                    </div>

                    <nav className="custome-pagination">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="javascript:void(0)" tabindex="-1" aria-disabled="true">
                                    <i className="fa-solid fa-angles-left"></i>
                                </a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="javascript:void(0)">1</a>
                            </li>
                            <li className="page-item" aria-current="page">
                                <a className="page-link" href="javascript:void(0)">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)">
                                    <i className="fa-solid fa-angles-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
