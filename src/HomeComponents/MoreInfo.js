import React from 'react'
import ProductSection from './ProductSections/ProductSection'

export default class MoreInfo extends React.Component{




    render(){
        console.log("hide carousel: "+this.props.hideCarousel);
        return(
            <div className={this.props.activeClass + " " +this.props.section}>
                <h1>TEST</h1>
                <div className={"row"}>
                    <ProductSection hide = {this.props.hideCarousel} section = {this.props.section}/>
                </div>
                <div className={"row"}>
                    <div className={"col-xs-offset-6"}>
                        <span onClick={()=>{this.props.hideInfo();}}  className={"glyphicon glyphicon-chevron-up"}></span>
                    </div>
                </div>
            </div>
        );
    }

}