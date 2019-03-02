import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

import Search from "./component/Search";
import Result from "./component/Result";
import Restaurant from "./component/Restaurant";
import Recipe from "./component/Recipe";
import Favorite from "./component/Favorite";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Search} exact />
                    <Route path="/Result" component={Result} />
                    <Route path="/Restaurant" component={Restaurant} />
                    <Route path="/Recipe" component={Recipe} />
                    <Route path="/Favorite" component={Favorite}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
