import React from "react";
import Particles from "react-particles-js";
import Rtype from "react-typed";
import background from "../../bgHeader.jpg";
import "./styles.css";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-wraper" style={{ backgroundImage: `url(${background})` }} />
            <div className="overlay" />
            <Particles
                className="particles-canvas"
                params={{
                    particles: {
                        number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "",
                            stroke: {
                                width: 5,
                                color: "f9ab00"
                            }
                        }
                    }
                }} />
            <div className="main-info">
                <div className="info-content">
                    <h1>
                        Yeiner Villegas, Software Developer
                    </h1>
                    <p>
                        Skills:
                    </p>
                    <Rtype className="typed-text"
                        strings={["JavaScript", "React", "Java", "Ruby", "Bootstrap", "HTML", "CSS3"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                    <a href="#" className="btn-main-offer">
                        Contact me
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
