import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light navbar-light container rounded my-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="w-50" src={logo} alt="" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div className="form-check form-switch d-flex align-items-center">
                                <input
                                    className="form-check-input  "
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault"
                                />
                                <a
                                    className="form-check-label nav-link active"
                                    htmlFor="flexSwitchCheckDefault"
                                >
                                    Dark
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Link
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
