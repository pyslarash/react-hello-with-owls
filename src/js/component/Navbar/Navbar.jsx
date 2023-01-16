import React from "react";

const menuItems = [];
const title = "Start Bootstrap";

const home = {
    name: "Home",
    url: "#",
    isActive: true
};

const about = {
    name: "About",
    url: "#",
    isActive: false
};

const services = {
    name: "Services",
    url: "#",
    isActive: false
};

const contact = {
    name: "Contact",
    url: "#",
    isActive: false
};

menuItems.push(home,about,services,contact);

const showMenu = menuItems.map((singleItem, i) => {
    var makeItActive;
    if (singleItem.isActive === true) {makeItActive = " active"}
    else {makeItActive = ""};
    return <li className="nav-item" key={i}><a className={"nav-link" + makeItActive} href={singleItem.url}>{singleItem.name}</a></li>
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
}

export default Navbar;