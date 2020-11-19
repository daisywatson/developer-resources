import React, { Component } from 'react';
import './App.css';
import NewItemForm from './NewItemForm'; //just for testing, belongs in main container
import EditItemForm from './EditItemForm'; //just for testing, belongs in main container
//ADD imports from main container, Login, and Register, once those files created
//ADD import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'; //GOT AN ERROR FROM THIS LINE, BELIEVE THAT THE FRONT END AND BACK END NEED TO BE LOCATED IN SAME PLACE TO RESOLVE OTHERWISE TRY: npm install -S react-router-dom


//UNCOMMENT WHEN REGISTER, LOGIN, AND MAIN CONTAINER ARE CREATED
// const LoggedInRoute = ({ component: Component,  ...rest}) => {
//   return <Route {...rest} render={(props)=>(
//     localStorage.getItem('active') ? <Component {...props}/> : <Redirect to='/login'/>
//   )} />
// }

//THIS GOES IN THE DIV BELOW ONCE REGISTER, LOGIN, AND MAIN CONTAINER ARE CREATED
// <BrowserRouter>
//   <Switch>
//     <Route path="/register" exact component={Register}/>
//     <Route path="/login" exact component={Login}/>
//     <LoggedInRoute path="/" exact component={main container from  RN} />
//   </Switch>
// </BrowserRouter>

//NEW ITEM FORM BELONGS IN MAIN CONTAINER. HERE FOR TESTING.

function App() {
  return (
    <div className="App">
      <NewItemForm />
      <EditItemForm />
    </div>
  );
}

export default App;
