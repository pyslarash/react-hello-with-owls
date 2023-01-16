import React from "react";

const today = new Date();
const year = today.getFullYear();

const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center text-md-left mt-3 py-3 fixed-bottom">
            Copyright © This Website {year}
        </footer>
    );
}

export default Footer;