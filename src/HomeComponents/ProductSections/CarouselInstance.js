import {Carousel} from 'react-bootstrap'
import React from 'react'

export default class CarouselInstance extends React.Component{

    constructor(){
        super();
        this.state = {
            hidden : "hide"
        }

    }

    show(){
        this.setState({
            hidden:"carousel-show"
        });
    }

    componentWillMount(){
        setTimeout(()=>{
            this.show();
        }, 500)
    }

    render(){

        return(
            <div className={"row" + " " + this.state.hidden}>
                <div id="car-container" className={"col-md-12 col-lg-6"}>
                    <Carousel  className={"back-slider"}>
                        {this.props.images.map( (image) => {

                            return (
                                <Carousel.Item >
                                    <img src={image} />
                                </Carousel.Item>
                            );

                        })}
                    </Carousel>
                </div>
                <div  className={"col-md-6"}>

                </div>
            </div>
        )

    }


}