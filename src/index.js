import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom'

import HomeIndex from './HomeComponents/HomeIndex'
import Navigation from './HomeComponents/Navigation'

class Test extends React.Component{
    render(){
       return( <h1>
            test
        </h1>)
    }
}

class Index extends React.Component{

    constructor(){
        super();
    }

    render(){
        return (
        <div >
            <Navigation />
            <HashRouter>
                <Switch>
                    <Route path = "/" component = {HomeIndex} />
                </Switch>
            </HashRouter>
        </div>
        )
    }

}


ReactDOM.render(<Index />, document.getElementById("app"));