import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="py-4 bg-light mt-auto">
                <div className="container-fluid">
                    <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">Copyright © Your Website 2020</div>
                    </div>
                </div>
                </footer>
            </div>
        )
    }
}
