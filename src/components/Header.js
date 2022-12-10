import React from "react"

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-success  navbar-dark py-3 fixed-top" >
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={require('../images/logo.png')} width="30" height="30" className="d-inline-block align-text-top" />
                    ToolsClub.org
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#docConverter" className="nav-link">Document Converter</a>
                        </li>
                        <li className="nav-item">
                            <a href="#questions" className="nav-link">Image Converter</a>
                        </li>
                        <li className="nav-item">
                            <a href="#instructors" className="nav-link">Compress Files</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header