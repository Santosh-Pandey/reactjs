import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Axios from 'axios'

export default class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            apimessage: '',
        }
    }

    componentDidMount() {
        const {id} = this.props.location.state;
        let ids = id;
 
        Axios.get('http://localhost:3001/notesdelbyid?noteId='+ids)
        .then(resData => {
                 console.log('UUUUUUUUU'+resData);
                 this.setState({
                    apimessage: true
                 })
             })
 
       }




    render() {


        if(this.state.apimessage){
           localStorage.setItem('myData', 'Data Successpully Deleted'); 
           return  <Redirect
                to={{
                    pathname: "/paging",
                    state: { myFalshmsg: 'Data Successpully Deleted' }
                }}
            />
        }

        return (
            <div>
                
            </div>
        )
    }
}
