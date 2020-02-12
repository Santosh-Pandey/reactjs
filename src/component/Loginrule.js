import React from 'react'

import { Redirect, Route } from 'react-router-dom'

const Loginrule = ({ component: Component, ...rest }) => {

  // Add your own authentication on the below line.
  
  const isLoggedIn = localStorage.getItem('userData');

  if(isLoggedIn==''){
    //window.location.replace("/")
  }  


  return (
    <div></div>
  )
}

export default Loginrule