import React, { Component } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import Axios from 'axios'
import { Alert } from 'react-bootstrap';

//import { Redirect } from 'react-router';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator({autoForceUpdate: this});

        this.onChangeusername = this.onChangeusername.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            apidata: ''
          }
    }

    componentDidMount(){
        const isLoggedIn = localStorage.getItem('userData');
        console.log('EEEEEE'+isLoggedIn);
        if(isLoggedIn!==null){
            window.location.replace("/dashboard")
        }  
    }

    onChangeusername(e) {
        this.setState({
          username: e.target.value
        });
      }
      onChangepassword(e) {
        this.setState({
          password: e.target.value
        })  
      }

    onSubmit(e) {
        e.preventDefault();
        if (this.validator.allValid()) {

            const obj = {
                username: this.state.username,
                password: this.state.password
              };
            
              Axios.post('http://localhost:3001/login',obj)
              .then(resData => {
                console.log(resData.data);
                this.setState({

                        apidata: resData.data,
                        
                })
            })

        }else{
            this.validator.showMessages();
            this.forceUpdate();
        }

    }

    render() {

        let data = this.state.apidata;
        let isError = data.error;
        var myAlert;

        if(isError){
            myAlert =  <Alert variant='danger' > Response! {data.message}</Alert> 
        }
        
        if(isError === 0){
            localStorage.setItem('userData', 'successfullly login'); 
            window.location.replace("/dashboard");
            
        }

        return (
            <div>
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-5">
                                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                            <div className="card-body">
                                                
                                                {myAlert}

                                                <form onSubmit={this.onSubmit}>
                                                    <div className="form-group"><label className="small mb-1" htmlFor="inputEmailAddress">Username</label>
                                                        <input className="form-control py-4" id="inputEmailAddress" type="text" placeholder="Enter Username" value={this.state.username} onChange={this.onChangeusername} />
                                                    
                                                        <div style={{color: 'red'}}>
                                                            {/**********   This is where the magic happens     ***********/}
                                                            {this.validator.message('username', this.state.username, 'required')}
                                                        </div> 
                                                    
                                                    </div>

                                                    <div className="form-group"><label className="small mb-1" htmlFor="inputPassword">Password</label>
                                                        <input className="form-control py-4" id="inputPassword" type="password" placeholder="Enter password" value={this.state.password} onChange={this.onChangepassword} />
                                                        <div style={{color: 'red'}}>
                                                            {/**********   This is where the magic happens     ***********/}
                                                            {this.validator.message('password', this.state.password, 'required')}
                                                        </div> 
                                                    
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox"><input className="custom-control-input" id="rememberPasswordCheck" type="checkbox" /><label className="custom-control-label" htmlFor="rememberPasswordCheck">Remember password</label></div>
                                                    </div>

                                                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                        <button type="submit" className="btn btn-primary">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="card-footer text-center">
                                                <div className="small"><a href="register.html">Need an account? Sign up!</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    
                </div>
            </div>


        )
    }
}
