import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Nav extends Component {
    render() {

        if(window.location.pathname ==='/'){
            return null;
        } 

        return (
            <div>
                <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <Link className="nav-link" to="/dashboard">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div> Dashboard
                                </Link>
                                <div className="sb-sidenav-menu-heading">Crud Operation</div>
                                <a className="nav-link collapsed" href="aaaaa" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fas fa-columns" /></div>Action
                                    <div className="sb-sidenav-collapse-arrow">
                                        <i className="fas fa-angle-down" />
                                    </div>
                                </a>

                                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link className="nav-link" to="/create">Create Records</Link>
                                        { /*<Link className="nav-link" to="/display">Display Records</Link> */}
                                        <Link className="nav-link" to="/paging">Display Paging Records</Link>
                                        <Link className="nav-link" to="/fileupload">File Upload</Link>
                                    </nav>
                                </div>

                                
                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Santosh Kumar Pandey</div>
                        </div>
                    </nav>
                </div>
            </div>

        )
    }
}
