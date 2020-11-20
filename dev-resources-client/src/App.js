import React, { Component } from 'react'
import './App.css';
import ItemContainer from './ItemContainer'
import Login from './Login'
import Register from './Register'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom' //GOT AN ERROR FROM THIS LINE, BELIEVE THAT THE FRONT END AND BACK END NEED TO BE LOCATED IN SAME PLACE TO RESOLVE OTHERWISE TRY: npm install -S react-router-dom


const LoggedInRoute = ({ component: Component,  ...rest}) => {
  return <Route {...rest} render={(props)=>(
    localStorage.getItem('active') ? <Component {...props}/> : <Redirect to='/login'/>
  )} />
}



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <LoggedInRoute path="/" exact component={ItemContainer} />
      </Switch>
    </BrowserRouter>
  )
}


export default App
