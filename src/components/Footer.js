import React from 'react';

const Footer = () => {

    return (
        <div className="row footer">
            <div className="container">
                <div className="row">
                    <div className=" offset-lg-1 col-lg-3">
                        <h3>Account</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Account Details</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Orders</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Returns and Exchange</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h3>The Company</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Careers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 offset-lg-3">
                        <h3>Follow us!</h3>
                        <div className="socials">
                            <a href="#"><i className="fab fa-facebook-square"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer;