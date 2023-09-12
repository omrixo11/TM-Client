import React from 'react'

export default function Error() {
  return (
    <>
    <section className="breadscrumb-section pt-0">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="breadscrumb-contain">
                        <h2>404 Page</h2>
                        <nav>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a href="index.html">
                                        <i className="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">404</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <section className="section-404 section-lg-space">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="image-404">
                        <img src="assets/images/inner-page/404.png" className="img-fluid blur-up lazyload" alt=""/>
                    </div>
                </div>

                <div className="col-12">
                    <div className="contain-404">
                        <h3 className="text-content">The page you are looking for could not be found. The link to this
                            address may be outdated or we may have moved the since you last bookmarked it.</h3>
                        <button onclick="location.href = 'index.html';"
                            className="btn btn-md text-white theme-bg-color mt-4 mx-auto">Back To Home Screen</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

