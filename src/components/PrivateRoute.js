import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  const Component = children.type;

  return (<Route {...rest} render={(props) => localStorage.getItem("token") ? <Component {...props}/> : <Redirect to="/login"/>}/>);
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute