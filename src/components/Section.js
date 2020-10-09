import React, { useState } from 'react';
import Select from 'react-select';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";

const Section = () => {

    const brands = [
        {
            value: "Superbalist",
            label: "SUPERBALIST"
        },{
            value: "Mango",
            label: "MANGO"
        },{
            value: "Nike",
            label: "NIKE"
        }
    ];

    const [value, setValue] = useState({
        min: 300,
        max: 2000
    })

    const customStyles = {
        option: () => ({
            fontFamily: "PT Sans",
            padding: ".6rem"
        }),
        select: () => ({
            fontFamily: "PT Sans",
            padding: ".3rem"
        }),
        multiValueRemove: () => ({
            fontFamily: "PT Sans",
            color: "#ffffff",
            backgroundColor: "#00A2FF",
            fontSize: "16px"
        }),
        multiValueLabel: () => ({
            fontFamily: "PT Sans",
            color: "#ffffff",
            backgroundColor: "#00A2FF",
            fontSize: "16px",
            padding: ".3rem"
        })
    }

    return (
      <div className="row">
        <div className="col-lg-3 sidebar">
            <div className="search-form">
                <div className="header">
                    <span className="hide">
                        <i className="fas fa-chevron-left"></i> Hide
                    </span>
                    <h3>SEARCH REWAY <i className="fas fa-search"></i></h3>
                </div>
                <div className="form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="size">BRANDS</label>
                            <Select 
                                styles={customStyles} 
                                placeholder="Select Brand" 
                                isMulti 
                                options={brands}
                                defaultValue={[brands[0], brands[1]]}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="size">COLOUR</label>
                            <select className="form-control" id="size">
                                <option>SELECT COLOUR</option>
                                <option>BROWN</option>
                                <option>PURPLE</option>
                                <option>RED</option>
                            </select>
                        </div>
                        <div className="form-group price-group">
                            <label htmlFor="price" id="price">PRICE</label>
                            <div id="slider">
                                <InputRange 
                                    value={value} maxValue={2500} minValue={0} onChange={(newValue) => {
                                        setValue(newValue)
                                    }} 
                                />                      
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <button className="btn btn-primary">
                                <i className="fas fa-search"></i>
                                SEARCH
                            </button>
                        </div>      
                    </form>
                </div>
            </div>
            <img src="./images/Advert Banner.png" alt="Reway Banner"/>
            <div className="newsletter">
                <i className="fas fa-times" id="newsletter"></i>
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
        <div className="col-lg-9">
            <div className="row top-banner align-items-center">
                <div className="col-lg-4 offset-lg-1 col-md-6 col-12 banner-content">
                    <h2>SUMMER SALE!</h2>
                    <h4>UP TO 50% OFF!</h4>
                </div>
                <div className="col-lg-4 offset-lg-2 col-md-6 col-12 banner-button">
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
                        <div className="col-lg-6 product-image col-md-6">
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
                                        <img className="d-block w-100" src="./images/Main item Image 02.png" alt="Dylan Hiker 2" />
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
                                <div className="special">
                                    <i className="fas fa-tag"></i> -40% off
                                </div>
                            </div>
                            <div className="shoes">
                                <div id="0" className="product-image selected" style={{background: `url("./images/Main item Image 01.png")`}}>
                                </div>
                                <div id="1" className="product-image" style={{background: `url("./images/Main item Image 02.png")`}}>
                                </div>
                                <div id="2" className="product-image" style={{background: `url("./images/Main item Image 03.png")`}}>
                                </div>
                                <div id="3" className="product-image" style={{background: `url("./images/Main item Image 04.png")`}}>
                                </div>
                                <div id="4" className="product-image" style={{background: `url("./images/Main item Image 05.png")`}}>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
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
                                        <div className="row special-details align-items-center">
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
                    </div>
                    <div className="row more-boots">
                        <div className="col-lg-3">
                            <h3>MORE FROM <span className="effect">BOOTS</span></h3>
                        </div>
                        <div className="col-lg-9">
                            <div className="line">
                            </div>
                        </div>
                    </div>
                    <div className="row other-boots">
                        <div className="col-md-4 col-6 boot">
                            <img src="./images/Boots 01.png" alt="HARGRAVE ANKLE BOOT"/>
                            <div className="content">
                                <div className="special">
                                    <i className="fas fa-tag"></i> -40% off
                                </div>
                                <h4>HARGRAVE ANKLE BOOT</h4>
                                <span className="light-text">
                                    <i className="fas fa-store-alt"></i> SUPERBALIST
                                </span>
                                <div className="row">
                                    <div className="col-sm-6 col-3">
                                        <span className="price">R500</span>
                                    </div>
                                    <div className="col-sm-6 col-9">
                                        <button className="btn btn-link">
                                            View <i className="fas fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-6 boot">
                            <img src="./images/Boots 02.png" alt="CAMERON LEATHER"/>
                            <div className="content">
                                <h4>CAMERON LEATHER</h4>
                                <div className="low-stock">
                                    LOW STOCK
                                </div>
                                <span className="light-text">
                                    <i className="fas fa-store-alt"></i> SUPERBALIST
                                </span>
                                <div className="row">
                                    <div className="col-sm-6 col-3">
                                        <span className="price">R539</span>
                                    </div>
                                    <div className="col-sm-6 col-9">
                                        <button className="btn btn-link">
                                            View <i className="fas fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-6 boot">
                            <img src="./images/Boots 03.png" alt="HGRAYSON BROGUE"/>
                            <div className="content">
                                <h4>GRAYSON BROGUE</h4>
                                <div className="low-stock">
                                    LOW STOCK
                                </div>
                                <div className="special">
                                    <i className="fas fa-tag"></i> -40% off
                                </div>
                                <span className="light-text">
                                    <i className="fas fa-store-alt"></i> SUPERBALIST
                                </span>
                                <div className="row">
                                    <div className="col-sm-6 col-3">
                                        <span className="price">R420</span>
                                    </div>
                                    <div className="col-sm-6 col-9">
                                        <button className="btn btn-link">
                                            View <i className="fas fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-6 boot">
                            <img src="./images/Boots 04.png" alt="ORCA"/>
                            <div className="content">
                                <h4>ORCA</h4>
                                <div className="special">
                                    <i className="fas fa-tag"></i> -40% off
                                </div>
                                <div className="low-stock">
                                    LOW STOCK
                                </div>
                                <span className="light-text">
                                    <i className="fas fa-store-alt"></i> SUPERBALIST
                                </span>
                                <div className="row">
                                    <div className="col-sm-6 col-3">
                                        <span className="price">R500</span>
                                    </div>
                                    <div className="col-sm-6 col-9">
                                        <button className="btn btn-link">
                                            View <i className="fas fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-6 boot">
                            <img src="./images/Boots 05.png" alt="JEAN HIKER BOOTS"/>
                            <div className="content">
                                <h4>JEAN HIKER BOOTS</h4>
                                <span className="light-text">
                                    <i className="fas fa-store-alt"></i> SUPERBALIST
                                </span>
                                <div className="row">
                                    <div className="col-sm-6 col-3">
                                        <span className="price">R600</span>
                                    </div>
                                    <div className="col-sm-6 col-9">
                                        <button className="btn btn-link">
                                            View <i className="fas fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
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