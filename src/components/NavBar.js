import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavBar() {
    const {
        user: { name },
    } = useSelector((state) => state.USER);

    const [active, setActive] = useState(false);

    return (
        <>
            <nav
                className="navbar is-link"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <h2 className="has-text-weight-bold">Quiz Game</h2>
                    </Link>

                    <button
                        onClick={() => setActive(!active)}
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                <div
                    id="navbarBasicExample"
                    className={`navbar-menu ${active ? "is-active" : ""}`}
                >
                    <div className="navbar-end">
                        <div className="navbar-item">
                            Hi, {name ? name : "Padawan"}
                        </div>
                        <div className="navbar-item">
                            <a
                                href="https://github.com/j4viermora/quiz-game"
                                className="button is-primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <strong>Contribute</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
