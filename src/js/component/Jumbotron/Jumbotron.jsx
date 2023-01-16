import React from "react";
import './style.css';

let title = "A Website About Owls";
let description = "We had to make a landing page for this project, so I decided to make one featuring different owls. If you are an owl freak, check out the links in the cards below. All of the information was found on Google and Wikipedia. It might have some rightful owners, but I'm using it for educational purposes here. This page is built on React.js and Bootstrap (with some CSS).";

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">{title}</h1>
            <p className="lead">{description}</p>
            <p className="lead">
            <a className="btn btn-danger btn-lg" href="#" role="button">Call to Action</a>
            </p>
        </div>
    );
}

export default Jumbotron;