import React from "react";
import "./styles.css";
import avatar from "../../avatar1.svg";
import hover from "../../hover.svg";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container py-2">
                <a className="navbar-brand-avatar" href="#">
                    <img src={avatar} alt="avantar"></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={hover} alt="hover"></img>
                </button>

                <div className="collapse navbar-collapse justify-content-end navbar-collapse-link" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Home
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">
                                Profile
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Experience
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contacs
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar