import React, { Component } from 'react'

export default class Logout extends Component {


    componentDidMount() {
        // remove
        //localStorage.removeItem('myData');

        // remove all
        localStorage.clear();
        window.location.replace("/");
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
