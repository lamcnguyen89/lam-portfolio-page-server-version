import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/admindashboard">
          Admin Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={logout} href="#!">
          Logout
        </a>
      </li>
    </>
  );

  const guestLinks = <li className="nav-item"></li>;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Lam Portfolio Page
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/aboutme">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projectlanding">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
