import React from "react";
import { NavLink } from "react-router-dom";
function Dropdown(props) {
    return (
        <React.Fragment>
            <NavLink activeClassName="active" to="/">
                <div className="navs">Ana Sayfa</div>
            </NavLink>
            <NavLink to="/lastWorks" activeClassName="active">
                <div className="navs">Son Işlerimiz</div>
            </NavLink>
            <NavLink to="/certifications" activeClassName="active">
                {/* <div className="navs">Certifications</div> */}
            </NavLink>
            <NavLink to="/projects" activeClassName="active">
                <div className="navs">3rd page</div>
            </NavLink>
            <NavLink to="/about-me" activeClassName="active">
                <div className="navs">4th page</div>
            </NavLink>
            <NavLink to="/admin" activeClassName="active">
                <div className="navs">admin</div>
            </NavLink>
        </React.Fragment>
    )
}
export default Dropdown;