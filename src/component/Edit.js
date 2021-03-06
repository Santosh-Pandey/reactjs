import React, { Component } from 'react'
import Footer from './Footer'
import SimpleReactValidator from 'simple-react-validator';
import { Redirect } from 'react-router';
import { Alert } from 'react-bootstrap';
import Axios from 'axios'



export default class Edit extends Component {

    constructor(props) {
        super(props);
        //const {id} = props.location.state;
        //console.log(id);
  
        // Form Validator
        this.validator = new SimpleReactValidator({autoForceUpdate: this});
  
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeAuthorContact = this.onChangeAuthorContact.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeLanguage = this.onChangeLanguage.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeids = this.onChangeids.bind(this);
  
  
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {  
          ids: '',  
          title: '',
          content: '',
          author_first_name:'',
          author_last_name:'',
          author_contact:'',
          country:'',
          language:'',
          description:'',
          isError: ''
        }
    }


    onChangeTitle(e) {
        this.setState({
          title: e.target.value
        });
      }
      onChangeContent(e) {
        this.setState({
          content: e.target.value
        })  
      }
      onChangeFirstName(e) {
        this.setState({
          author_first_name: e.target.value
        })
      }
    
      onChangeLastName(e) {
        this.setState({
          author_last_name: e.target.value
        });
      }
      onChangeAuthorContact(e) {
        this.setState({
          author_contact: e.target.value
        })  
      }
      onChangeCountry(e) {
        this.setState({
          country: e.target.value
        })
      }
    
      onChangeLanguage(e) {
        this.setState({
          language: e.target.value
        })  
      }
      onChangeDescription(e) {
        this.setState({
          description: e.target.value
        })
      }

      onChangeids(e) {
        this.setState({
          ids: e.target.value
        })
      }

      componentDidMount() {
       const {id} = this.props.location.state;
       let ids = id;

       Axios.get('http://localhost:3001/notesbyid?noteId='+ids)
       .then(resData => {
                console.log(resData.data);
                this.setState({
                        ids: resData.data._id,
                        title: resData.data.title,
                        content: resData.data.content,
                        author_first_name:resData.data.author_first_name,
                        author_last_name:resData.data.author_last_name,
                        author_contact:resData.data.author_contact,
                        country:resData.data.other_info.country,
                        language:resData.data.other_info.language,
                        description:resData.data.other_info.description
                    })
            })

      }

      onSubmit(e) {
        e.preventDefault();
        //console.log(`The values are ${this.state.person_name}, ${this.state.business_name}, and ${this.state.business_gst_number}`)
        
        //form validation
        //console.log('IIIIDDDD'+this.id);
        if (this.validator.allValid()) {
            
            const upobj = {
                id: this.state.ids,
                title: this.state.title,
                content: this.state.content,
                author_first_name: this.state.author_first_name,
                author_last_name: this.state.author_last_name,
                author_contact: this.state.author_contact,
                other_info:{
                  country: this.state.country,
                  language: this.state.language,
                  description: this.state.description
                }
              };
              
              //console.log(JSON.stringify(obj));
    
               Axios.post('http://localhost:3001/notesupbyid',upobj)
               .then(resData => {
                    console.log(resData);
                    this.setState({
                            title: '',
                            content: '',
                            author_first_name:'',
                            author_last_name:'',
                            author_contact:'',
                            country:'',
                            language:'',
                            description:'',
                            redirectToReferrer:true,
                            response : resData,
                            isError: false,
                        })
                })

              
              
          
        }else{
            this.validator.showMessages();
            this.forceUpdate();
        }
    
      }


    render() {
        

       // var obj = JSON.parse(JSON.stringify(this.state.response));
        //var apierror = this.state.response;
        


        var myAlert = '';
        if (this.state.isError === false) {
            //myAlert =  <Alert variant='info'>Response! {JSON.stringify(this.state.response)}</Alert>
            
           localStorage.setItem('myData', 'Data Successpully Updated'); 
           return  <Redirect
                to={{
                    pathname: "/paging",
                    state: { myFalshmsg: 'Data Successpully Updated' }
                }}
            />

        }else if(this.state.isError === true){
            myAlert = <Alert variant='danger'>Failed! {JSON.stringify(this.state.errors)}</Alert>

        }
       


        return (
            
            <div id="layoutSidenav_content">
                
                <div className="container mt-12">
                    <main>
                    <div className="container-fluid">
                        
                        <div className="pb-2 mt-4 mb-2 border-bottom">
                            <h2>Edit and Upadte Record</h2>
                        </div>
                        
                        {myAlert}
                        
                        <div className="card mb-12">
                        <div className="card-header"><i className="fas fa-form" />Edit and Update Record Form</div>
                        <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4">Title</label>
                                    <input type="text" className="form-control"  placeholder="Enter Title"  value={this.state.title} onChange={this.onChangeTitle} />
                                    <div style={{color: 'red'}}>
                                        {/**********   This is where the magic happens     ***********/}
                                        {this.validator.message('title', this.state.title, 'required|alpha')}
                                    </div>  
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Content</label>
                                    <input type="text" className="form-control" id="id1" placeholder="Enter Content"  value={this.state.content} onChange={this.onChangeContent} />
                                    <div style={{color: 'red'}}>
                                        {/**********   This is where the magic happens     ***********/}
                                        {this.validator.message('content', this.state.content, 'required|alpha')}
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">First Name</label>
                                    <input type="text" className="form-control" id="id2" placeholder="Enter Content"   value={this.state.author_first_name} onChange={this.onChangeFirstName} />
                                    <div style={{color: 'red'}}>
                                        {/**********   This is where the magic happens     ***********/}
                                        {this.validator.message('author_first_name', this.state.author_first_name, 'required|alpha')}
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Last Name</label>
                                    <input type="text" className="form-control" id="id3" placeholder="Enter Content"  value={this.state.author_last_name} onChange={this.onChangeLastName} />
                                    <div style={{color: 'red'}}>
                                        {/**********   This is where the magic happens     ***********/}
                                        {this.validator.message('author_last_name', this.state.author_last_name, 'required|alpha')}
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Contect No</label>
                                    <input type="text" className="form-control" id="id4" placeholder="Enter Content"  value={this.state.author_contact} onChange={this.onChangeAuthorContact}/>
                                    <div style={{color: 'red'}}>
                                        {/**********   This is where the magic happens     ***********/}
                                        {this.validator.message('author_contact', this.state.author_contact, 'required')}
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Country</label>
                                    <input type="text" className="form-control" id="id5" placeholder="Enter Content"  value={this.state.country} onChange={this.onChangeCountry} />
                                    <div style={{color: 'red'}}>
                                        {/**********   This is where the magic happens     ***********/}
                                        {this.validator.message('country', this.state.country, 'required|alpha')}
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Language</label>
                                    <input type="text" className="form-control" id="id6" placeholder="Enter Content"  value={this.state.language} onChange={this.onChangeLanguage}  />
                                    <div style={{color: 'red'}}>
                                        {/**********   This is where the magic happens     ***********/}
                                        {this.validator.message('language', this.state.language, 'required|alpha')}
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputAddress">Description</label>
                                <input type="text" className="form-control" id="id7" placeholder="Enter Description"  value={this.state.description} onChange={this.onChangeDescription} />
                                <div style={{color: 'red'}}>
                                        {/**********   This is where the magic happens     ***********/}
                                        {this.validator.message('description', this.state.description, 'required')}
                                    </div>
                            </div>
                            <input type="hidden" id="id8" value={this.state.ids} onChange={this.onChangeids} />
                           
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
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
