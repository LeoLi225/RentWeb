import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css"

function Navbar() {

    return <nav className="navbar bg-dark container">
        <h4><Link className="link" to="/">Home</Link></h4>
        <h4><Link className="link" to="/cars">租车展示</Link></h4>
        <h4><Link className="link" to="/create">Create</Link></h4>
    </nav>
}

export default Navbar;