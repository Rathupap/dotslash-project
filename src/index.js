import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import "./styles/index.scss";
import "bootstrap";
import Navigation from './components/Navigation';
import Strip from './components/Strip';
import Footer from './components/Footer';
import Section from './components/Section';

const MainPage = () => {

    return (
        <div className="container-fluid">
            <Navigation />
            <Strip />
            <Section />
            <Footer />
        </div>
    )

}

ReactDOM.render(<MainPage />, $("#reway")[0])