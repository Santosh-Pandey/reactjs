import React, { Component } from 'react'
import Footer from './Footer'

export default class Display extends Component {
    constructor() {
        super();
        this.state = {authorNote: []};
    }

    componentDidMount() {
        fetch('http://localhost:3001/notes/')
        .then(response =>  response.json())
        .then(resData => {
           
           this.setState({ authorNote: resData }) //this is an asynchronous function
        })
    }
    


    render() {
        let allNote = this.state.authorNote;
        
        return (
            <div id="layoutSidenav_content">
                <div className="container mt-12">
                    <main>
                        <div className="container-fluid">

                            <div className="pb-2 mt-4 mb-2 border-bottom">
                                <h2>Display Record</h2>
                            </div>

                            <div className="card mb-12">
                                <div className="card-header"><i className="fas fa-eye" />Dispay Auther Records</div>
                                <div className="card-body">
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
                                               </tr>
                                           </thead>
                                           <tbody>
                                           {allNote.map((note,i) => 
                                                  
                                                <tr key={i}>
                                                    <td key="{note._id}">{note._id}</td>
                                                    <td key="{note.author_first_name}">{note.author_first_name}</td>
                                                    <td key="{note._idauthor_last_name}">{note.author_last_name}</td>
                                                    <td key="{note.content}">{note.content}</td>
                                                    <td key="{note.other_info.language}">{note.other_info.language}</td>
                                                    <td key="{note.other_info.description}">{note.other_info.description}</td>
                                                </tr>
                                                
                                            )}    
                                           </tbody>
                                       </table>
                                } 




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
