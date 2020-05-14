import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {


    render() {
        return (
            <header id="header" className="header">
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-tra hover-menu">
                    <div className="container">

                        <Link to="/" className="navbar-brand logo-black">
                            <img src="/images/logo-1.png" width="50" height="50" alt="header-logo" />
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-bar-icon"><i className="fas fa-bars"></i></span>
                        </button>

                        <div id="navbarSupportedContent" className="collapse navbar-collapse red-hover">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item ">
                                    <Link to="/" className="nav-link">
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item nl-simple">
                                    <Link className="nav-link" to="/works/all">
                                        Latest Works
                                    </Link>
                                </li>

                                <li className="nav-item ">
                                    <Link className="nav-link" to="/contact">
                                        Contacts
                                    </Link>
                                </li>

                            </ul>
                        </div>


                    </div>
                </nav>
            </header>
        )
    }
}
