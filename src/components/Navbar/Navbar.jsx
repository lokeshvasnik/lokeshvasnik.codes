import React from 'react';
import logo from '../../assets/logo.png';
const Navbar = (props) => {
    const submitButtonHandler = () => {
        //  if the theme is not light, then set it to dark
        if (props.color === 'light') {
            props.onSaveTheme('dark');
        }
        // else to ligth
        else {
            props.onSaveTheme('light');
        }
    };

    return (
        <nav
            className={`navbar navbar-expand-lg ${
                props.color === 'light'
                    ? 'bg-light navbar-light'
                    : 'bg-dark navbar-dark'
            } `}
        >
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
                        <li className="nav-item ">
                            <div className="form-check form-switch d-flex align-items-center">
                                <input
                                    className="form-check-input  "
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault"
                                    onClick={submitButtonHandler}
                                />
                                <a
                                    className="form-check-label nav-link active"
                                    htmlFor="flexSwitchCheckDefault"
                                >
                                    {props.color === 'light' ? 'Dark' : 'Light'}
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Source Code
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
