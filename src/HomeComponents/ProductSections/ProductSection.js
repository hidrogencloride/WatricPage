import React from 'react'
import tubinesHighway from '../../static/images/NNWIND/highway-with-turbines.png'
import tunnel from '../../static/images/NNWIND/tunnel turbines.png'
import CarouselInstance from "./CarouselInstance";

export default class ProductSection extends React.Component{
    constructor(){
        super();
        this.constants = {
            NNWIND: [tunnel, tubinesHighway]
        }
    }


    render() {
        if (!this.props.hide) {
            switch (this.props.section) {
                case "NNWIND":
                    return (
                        <CarouselInstance
                            hideInfo = {()=>{this.props.unMount()}}
                            hide={()=>{this.hide()}}
                                images={this.constants.NNWIND}/>
                    );
                default:
                    return <h1>Nothing to show</h1>;

            }
        }else{
            return <div></div>
        }
    }
}