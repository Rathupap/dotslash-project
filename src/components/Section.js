import React from 'react';

const Section = () => {

    return (
      <div className="row">
        <div className="col-lg-3 sidebar">
            <div className="search-form">
            </div>
            <img src="./images/Advert Banner.png" alt="Reway Banner"/>
            <div className="newsletter">
                <i className="fas fa-times"></i>
                <i className="fas fa-envelope"></i>
                <h3>SIGN UP TO OUR MAILING LIST</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailSubscribe" placeholder="ENTER EMAIL ADDRESS" />
                        <div className="row justify-content-center">
                            <button type="submit" className="btn btn-light">SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="col-lg-8">
            <div className="row top-banner align-items-center">
                <div className="col-lg-4 offset-lg-1 banner-content">
                    <h2>SUMMER SALE!</h2>
                    <h4>UP TO 50% OFF!</h4>
                </div>
                <div className="col-lg-4 offset-lg-2 banner-button">
                    <button className="btn btn-outline-light" type="button">SHOP NOW</button>
                </div>
            </div>
            <div className="row main-content">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Boots</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Dylan Hiker Boots</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-lg-6 product-image">
                            <div id="product-carousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#product-carousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#product-carousel" data-slide-to="1"></li>
                                    <li data-target="#product-carousel" data-slide-to="2"></li>
                                    <li data-target="#product-carousel" data-slide-to="3"></li>
                                    <li data-target="#product-carousel" data-slide-to="4"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src="./images/Main item Image 01.png" alt="Dylan Hiker 1" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src="./images/Main item Image 04.png" alt="Dylan Hiker 2" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src="./images/Main item Image 03.png" alt="Dylan Hiker 3" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src="./images/Main item Image 04.png" alt="Dylan Hiker 4" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src="./images/Main item Image 05.png" alt="Dylan Hiker 5" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#product-carousel" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#product-carousel" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <div className="shoes">
                                <div className="product-image selected" style={{background: `url("./images/Main item Image 01.png")`}}>
                                </div>
                                <div className="product-image" style={{background: `url("./images/Main item Image 02.png")`}}>
                                </div>
                                <div className="product-image" style={{background: `url("./images/Main item Image 03.png")`}}>
                                </div>
                                <div className="product-image" style={{background: `url("./images/Main item Image 04.png")`}}>
                                </div>
                                <div className="product-image" style={{background: `url("./images/Main item Image 05.png")`}}>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product-information">
                                <h3>DYLAN HIKER BOOT</h3>
                                <span className="light-text">
                                    <i className="fas fa-store-alt"></i> SUPERBALIST
                                </span>
                                <div className="options">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <span className="light">
                                            Fabication
                                            </span>
                                        </div>
                                        <div className="col-lg-8">
                                            <span className="dark">
                                                Faux Leather
                                            </span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4">
                                            <span className="light">
                                                Color
                                            </span>
                                        </div>
                                        <div className="col-lg-8">
                                            <span className="brown">
                                            </span>
                                            <span className="dark">
                                                Brown
                                            </span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4">
                                            <span className="light">
                                                Brand
                                            </span>
                                        </div>
                                        <div className="col-lg-8">
                                            <span className="dark">
                                                Superbalist
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h5>PRODUCT DETAILS</h5>
                                    <ul>
                                        <li>Hiking boot</li>
                                        <li>Speed laces</li>
                                        <li>Lace-up design</li>
                                        <li>Rubber sole</li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <div className="col-lg-9 offset-lg-3">
                                        <div className="row special-details">
                                            <div className="col-lg-6">
                                                <div className="special">
                                                    <i className="fas fa-tag"></i> -40% off
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="price">
                                                    <h4>R359</h4>
                                                    <span className="normal-price">
                                                        R599
                                                    </span>
                                                    <span className="grey-line"></span>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="add-to-cart">
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="size">SIZE</label>
                                        <select className="form-control" id="size">
                                            <option>SELECT SIZE</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="quantity">QUANTITY</label>
                                        <select className="form-control" id="quantity">
                                            <option>SELECT QUANTITY</option>
                                        </select>
                                    </div>
                                    <button className="btn btn-primary">
                                        <i className="fas fa-cart-plus"></i>
                                        ADD TO CART
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>  
    )

}

export default Section;