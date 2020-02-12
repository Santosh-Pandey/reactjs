import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        if(window.location.pathname ==='/'){
            return null;
        } 
        return (
        <div>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand" href="aaaaa">Start Bootstrap</a><button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="aaaa"><i className="fas fa-bars" /></button>{/* Navbar Search*/}
                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group">
                   
                </div>
                </form>
                {/* Navbar*/}
                <ul className="navbar-nav ml-auto ml-md-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="userDropdown" href="aaaa" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw" /></a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/logout">Logout</a>
                    </div>
                </li>
                </ul>
            </nav>
            </div>

        )
    }
}
