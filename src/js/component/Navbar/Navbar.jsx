import React from "react";
import propTypes from "prop-types";
const title = "Start Bootstrap";

const homeItem = {
    name: "Home",
    link: "#",
    active: true
};

const aboutItem = {
    name: "About",
    link: "#",
    active: false
};

const servicesItem = {
    name: "Services",
    link: "#",
    active: false
};

const contactItem = {
    name: "Contact",
    link: "#",
    active: false
};

const menuItems = [homeItem, aboutItem, servicesItem, contactItem];

const NavMenu = (props) => {
    return (
        <li className="nav-item">
            <a className={`nav-link ${props.isActive ? "active" : ""}`} href={props.url}>{props.name}</a>
        </li>
    )};

const showMenu = menuItems.map((menuItem, i) => {
    return (<NavMenu key={i} isActive={menuItem.active} url={menuItem.link} name={menuItem.name} />)
}
);

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
            <div className="container">
            <a className="navbar-brand" href="#">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex justify-content-end" id="navbarTogglerDemo02">
                    <ul className="nav navbar-nav ml-auto mb-2 mb-lg-0">
                        {showMenu}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

NavMenu.propTypes = {
    name: propTypes.string,
    url: propTypes.string,
    isActive: propTypes.bool
};

export default Navbar;