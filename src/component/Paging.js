import React, { Component } from 'react'
import Footer from './Footer'
import Axios from 'axios'
import Pagination from "react-js-pagination";
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

export default class Paging extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            activePage: 1,
            authorNote:[],
            totalItemsCount:1,
            myFalshmsg: ''
            
        };

    }

    handlePageChange(pageNumber) {
        //console.log(`active page is ${pageNumber}`);
        Axios.get('http://localhost:3001/notes?pageNo='+pageNumber+'&size=5')
        .then(resData => {
           
            this.setState({
                 authorNote: resData.data.message,
                 activePage: pageNumber,
                 totalItemsCount: resData.data.pages*10
                })
         })
    }



    componentDidMount() {
        Axios.get('http://localhost:3001/notes?pageNo=1&size=5')
        .then(resData => {
            this.setState({
                 authorNote: resData.data.message,
                 activePage: 1,
                 totalItemsCount: resData.data.pages*10

                })
         })
    }
    


    render() {
        var allNote = this.state.authorNote;
        var myAlert = '';

        //flash Session
        var sessionMsg = localStorage.getItem('myData');
        

        if(sessionMsg){
            myAlert =  <Alert variant='success' > Response! {sessionMsg}</Alert> 
            //this.props.location.state.myFalshmsg = '';                       
        }
        
        
        return (
            <div id="layoutSidenav_content">
                <div className="container mt-12">
                    <main>
                        <div className="container-fluid">

                            <div className="pb-2 mt-4 mb-2 border-bottom">
                                <h2>Display Record Using Pagination</h2>
                            </div>

                            <div className="card mb-12">
                                <div className="card-header"><i className="fas fa-eye" />Dispay Auther Records</div>
                                <div className="card-body">
                                {myAlert}
                                {  

                                           <table className="table table-hover">
                                           <thead>
                                               <tr>
                                                   <th>ID</th>
                                                   <th>Firstname</th>
                                                   <th>Lastname</th>
                                                   <th>Content</th>
                                                   <th>Language</th>
                                                   <th>Description</th>
                                                   <th>Edit</th>
                                                   <th>Delete</th>
                                               </tr>
                                           </thead>
                                           <tbody>
                                           { allNote.map((note,i) => 
                                                  
                                                <tr key={i}>
                                                    <td key="{note._id}">{note._id}</td>
                                                    <td key="{note.author_first_name}">{note.author_first_name}</td>
                                                    <td key="{note._idauthor_last_name}">{note.author_last_name}</td>
                                                    <td key="{note.content}">{note.content}</td>
                                                    <td key="{note.other_info.language}">{note.other_info.language}</td>
                                                    <td key="{note.other_info.description}">{note.other_info.description}</td>
                                                    <td><Link type="button" className="btn btn-info" to={{ pathname: '/edit', state: { id: note._id} }}>Edit</Link></td>
                                                    <td><Link type="button" className="btn btn-danger" to={{ pathname: '/delete', state: { id: note._id} }}>Delete</Link></td>
                                                </tr>
                                                
                                           )  }    
                                           </tbody>
                                       </table>
                                } 
                                   
                                   <div className="float-right">
                                    <Pagination
                                        activePage={this.state.activePage}
                                        totalItemsCount={this.state.totalItemsCount}
                                        pageRangeDisplayed={4}
                                        onChange={this.handlePageChange.bind(this)}
                                        itemClass='page-item'
                                        linkClass='page-link'
                                    />
                                 </div>
                                    
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        )
    }
}
