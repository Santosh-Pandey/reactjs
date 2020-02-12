import React from 'react';
import Header from './component/Header';
import Nav from './component/Nav';
import Dashboard from './component/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Create from './component/Create';
import Display from './component/Display';
import Paging from './component/Paging';
import Edit from './component/Edit';
import Delete from './component/Delete';
import Login from './component/Login';
import PrivateRoute from './component/PrivateRoute';
import Logout from './component/Logout';
import Fileupload from './component/Fileupload';
//import Loginrule from './component/Loginrule';
//require('dotenv').config()


function App() {

  
  return (
    <BrowserRouter>
    
      <div>
        <Header/>
        <Nav/>
            <Switch>
              <Route path="/" exact component={Login} />
              {/*<Loginrule path="/" exact component={Login} />*/}

              <Route path="/logout" exact component={Logout} />
              
              <PrivateRoute path="/create" exact component={Create} />
              <PrivateRoute path="/display" exact component={Display} />
              <PrivateRoute path="/paging" exact component={Paging} />
              <PrivateRoute path="/edit" exact component={Edit} />
              <PrivateRoute path="/delete" exact component={Delete} />
              {/*<Route path="/dashboard" exact component={Dashboard} />*/}
              <PrivateRoute path="/dashboard/" component={Dashboard} />
              <PrivateRoute path="/fileupload/" component={Fileupload} />
            </Switch>
        
      </div>
   </BrowserRouter>
   
  );
}

export default App;
