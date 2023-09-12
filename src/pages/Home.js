import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    getProductsStatus,
    fetchProducts,
    selectAllProducts,
    getProductsError,
} from '../features/products/productsSlice';
import {
    getCategorysStatus,
    fetchCategorys,
    selectAllCategorys,
    getCategorysError,
} from '../features/categorys/categorysSlice';
import Product from '../components/product';

export default function Home() {
    const dispatch = useDispatch();
    const productsStatus = useSelector(getProductsStatus);
    const products = useSelector(selectAllProducts);
    const error = useSelector(getProductsError);

    // categorys
    const categorysStatus = useSelector(getCategorysStatus);
    const categorys = useSelector(selectAllCategorys);
    const errorCategory = useSelector(getCategorysError);

    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        if (productsStatus === 'idle') {
            dispatch(fetchProducts());
        }
    }, [productsStatus, dispatch]);

    useEffect(() => {
        if (categorysStatus === 'idle') {
            dispatch(fetchCategorys());
        }
    }, [categorysStatus, dispatch]);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    // Filter products based on the selected category
    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    let contentToDisplay = '';

    if (productsStatus === 'loading') {
        contentToDisplay = <h2>Loading...</h2>;
    } else if (productsStatus === 'succeeded') {
        contentToDisplay =
            filteredProducts.length > 0 ? (
                filteredProducts.map((data) => (
                    <div key={data.id}>
                        <h2>{data.name}</h2>
                        <h3>{data.price}</h3>
                        <h3>{data.description}</h3>
                        <hr />
                    </div>
                ))
            ) : (
                <p>No products found for the selected category.</p>
            );
    } else if (productsStatus === 'failed') {
        contentToDisplay = <>{console.log(error)}</>;
    }
    return (
        <>
            <section className="home-section pt-2">
                <div className="container-fluid-lg">
                    <div className="row g-4">
                        <div className="col-xl-8 ratio_65">
                            <div className="home-contain h-100">
                                <div className="h-100">
                                    <img src="assets/images/vegetable/banner/1.jpg" alt="" />
                                </div>
                                <div className="home-detail p-center-left w-75">
                                    <div>

                                        <h1 className="text-uppercase" style={{ color: 'white' }}>RESTEZ CHEZ VOUS ET FAITES-VOUS LIVRER <span className="daily"> 24/7</span></h1>
                                        <p className="w-75 d-none d-sm-block" style={{ color: 'white' }}>meilleure sélection de produits frais.</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 ratio_65">
                            <div className="row g-4">
                                <div className="col-xl-12 col-md-6">
                                    <div className="home-contain">
                                        <img src="assets/images/vegetable/banner/2.jpg" alt="" />
                                        <div className="home-detail p-center-left home-p-sm w-75">
                                            <div>
                                                <h3 style={{ color: 'white' }}>Nous livrons des légumes et des fruits biologiques.<span style={{ color: 'white', fontSize: '20px' }}></span>
                                                </h3>
                                                <p className="w-75" style={{ color: 'white' }}></p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-12 col-md-6">
                                    <div className="home-contain">
                                        <img src="assets/images/vegetable/banner/3.jpg" alt="" />
                                        <div className="home-detail p-center-left home-p-sm w-75">
                                            <div>
                                                <h3 style={{ color: 'white' }}>Commencez vos achats quotidiens avec des produits biologiques.</h3>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="product-section">
                <div className="container-fluid-lg">
                    <div className="row g-sm-4 g-3">
                        <div className="col-xxl-3 col-xl-4 d-none d-xl-block">
                            <div className="p-sticky">
                                <div className="category-menu">
                                    <h3>Category</h3>
                                    <ul>
                                        {categorys ?
                                            categorys.map((categ, i) => (
                                                <li>
                                                    <div className="category-list">
                                                        <img src="assets/svg/1/vegetable.svg" alt="" />
                                                        <h5>
                                                            <a href="/Shop">{categ?.name}</a>
                                                        </h5>
                                                    </div>
                                                </li>
                                            ))
                                            :
                                            <> Loading </>

                                        }


                                    </ul>


                                </div>








                            </div>
                        </div>

                        <div className="col-xxl-9 col-xl-8">




                            <div className="section-t-space section-b-space">

                            </div>

                            <div className="title d-block">
                                <h2>Nos Produits
                                </h2>
                                <span className="title-leaf">
                                    <svg className="icon-width">
                                        <use xlinkhref="assets/svg/leaf.svg#leaf"></use>
                                    </svg>
                                </span>
                                <p>Notre meilleure sélection de produits</p>
                            </div>




                            <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
                                {/* <ProductsIndex/> */} {console.log(productsStatus, 'test', products)}
                                {products ? products.map((product, i) => (
                                    <Product product={product} key={i} />
                                )) : <>null</>

                                }




                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="newsletter-section section-b-space">
                {/* <div className="container-fluid-lg">
            <div className="newsletter-box newsletter-box-2">
                <div className="newsletter-contain py-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1">
                                <div className="newsletter-detail">
                                    <h2>Join our newsletter and get...</h2>
                                    <h5>$20 discount for your first order</h5>
                                    <div className="input-box">
                                        <input type="email" className="form-control" id="exampleFormControlInput1"
                                            placeholder="Enter Your Email"/>
                                        <i className="fa-solid fa-envelope arrow"></i>
                                        <button className="sub-btn  btn-animation">
                                            <span className="d-sm-block d-none">Subscribe</span>
                                            <i className="fa-solid fa-arrow-right icon"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
            </section>

        </>
    )
}
