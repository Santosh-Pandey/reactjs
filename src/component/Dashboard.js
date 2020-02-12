import React, { Component } from 'react'
import Footer from './Footer'

export default class Dashboard extends Component {

    
    render() {
        return (
        <div>
            <div id="layoutSidenav_content">
                <main>
                <div className="container-fluid">
                    <h1 className="mt-4">Welcome React Dashboard</h1>
                    <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                    <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-primary text-white mb-4">
                        <div className="card-body">Primary Card</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <a className="small text-white stretched-link" href="aaaa">View Details</a>
                            <div className="small text-white"><i className="fas fa-angle-right" /></div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-warning text-white mb-4">
                        <div className="card-body">Warning Card</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <a className="small text-white stretched-link"  href="aaaa">View Details</a>
                            <div className="small text-white"><i className="fas fa-angle-right" /></div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-success text-white mb-4">
                        <div className="card-body">Success Card</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <a className="small text-white stretched-link"  href="aaaa">View Details</a>
                            <div className="small text-white"><i className="fas fa-angle-right" /></div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-danger text-white mb-4">
                        <div className="card-body">Danger Card</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <a className="small text-white stretched-link"  href="aaaa">View Details</a>
                            <div className="small text-white"><i className="fas fa-angle-right" /></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    
                </div>
                </main>
                


                <Footer/>
            </div>
            </div>

        )
    }
}
