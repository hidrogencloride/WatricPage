import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route , Switch, withRouter} from 'react-router-dom'

import HomeIndex from './HomeComponents/HomeIndex'
import GenericComp from './ProductComponents/GenericProduct'

class ScrollToTop extends React.Component {
    componentDidUpdate() {
            window.scrollTo(0, 0)
    }

    render() {
        return this.props.children
    }
}


class Index extends React.Component{

    constructor(){
        super();
    }

    render(){
        return (
        <div >
            <BrowserRouter onUpdate={() => window.scrollTo(0, 0)} >
                <ScrollToTop>
                    <Switch>
                        <Route exact path = "/" component = {HomeIndex} />
                        <Route path = "/:product" component = {GenericComp}/>
                    </Switch>
                </ScrollToTop>
            </BrowserRouter>
        </div>
        )
    }

}


ReactDOM.render(<Index />, document.getElementById("app"));