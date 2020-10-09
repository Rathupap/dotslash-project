import React from 'react';

const Navigation = () => {

    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">
                    <img src="./images/Reway Logo.png" alt="Reway Shop Logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#main-nav" aria-controls="main-nav" 
                    aria-expanded="false" aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="main-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Apparels</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Shoes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Equipment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Gift</a>
                        </li>
                    </ul>
                    <ul className="nav icons-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-gift"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-star"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-heart"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-tag"></i></a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button type="button" className="btn btn-link">SIGN UP</button>
                        <button className="btn btn-outline-primary" type="button">Login</button>
                    </form>
                </div>
            </nav>
        </div>
    )

}

export default Navigation;