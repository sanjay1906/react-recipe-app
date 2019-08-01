import React from 'react'
import "../App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from "../App";
import Recipe from "../components/Recipe";


 const Router =() => (
     <div className="App">
     <BrowserRouter>
     <Switch>
     <Route path="/" component={App} exact />
     <Route path="/recipe/:id" component={Recipe} />
     </Switch>
     </BrowserRouter>
     </div>
        )
export default Router;