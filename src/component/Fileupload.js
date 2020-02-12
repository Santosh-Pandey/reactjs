import React, { Component } from 'react'
import { post } from 'axios';
import Footer from './Footer'
import { Alert } from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';


export default class Fileupload extends Component {

    constructor(props) {
        super(props);

        // Form Validator
        this.validator = new SimpleReactValidator({autoForceUpdate: this});

        this.state ={
          myfile:null,
          fileuploadstatus:'not initiated'
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
      }
      onFormSubmit(e){
        e.preventDefault() // Stop form submit

        this.fileUpload(this.state.myfile)

        .then((response)=>{
            //console.log(response.data);
            this.setState({
                fileuploadstatus: response.data,
                myfile:null,
            })

        })
      }
      onChange(e) {
        this.setState({myfile:e.target.files[0]})
      }
      fileUpload(file){
        //const url = 'http://localhost:3001/uploadfile';
        const url = process.env.REACT_APP_FILE_UPLOAD_URL_API;
        const formData = new FormData();
        formData.append('myFile',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config)
      }



    render() {

        //console.log('QQQQ'+process.env.REACT_APP_NODE_ENV)
        var apiresponse = this.state.fileuploadstatus
        
        var myAlert ='';
        let statusCode = apiresponse.status

        console.log(statusCode);    
        if(statusCode === '1'){
            
             myAlert =  <Alert variant='success' > Response! {apiresponse.message}</Alert>   

        }else if(statusCode === '0'){

            myAlert =  <Alert variant='danger' > Response! {apiresponse.message}</Alert>  

        }

        
        return (
            <div id="layoutSidenav_content">
                
                <div className="container mt-12">
                    <main>
                    <div className="container-fluid">
                        
                        <div className="pb-2 mt-4 mb-2 border-bottom">
                            <h2>Upload File Record</h2>
                        </div>
                        
                        
                        <div className="card mb-12">
                        <div className="card-header"><i className="fas fa-form" />Upload File Record Form</div>
                        <div className="card-body">

                        {myAlert}

                        <form onSubmit={this.onFormSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-6">

                                    <label htmlFor="inputEmail4">Document Upload</label>
                                    <input name='myfile' type="file" className="form-control"   onChange={this.onChange} required />
                                    
                                </div>
                               
                            </div>

                           
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
