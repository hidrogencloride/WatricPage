import React from 'react'

import {Carousel} from 'react-bootstrap'
import test from '../static/images/asphalt-cars-drive-541333.png'
import cliff from '../static/images/blur-bubble-clean-221382.png'
import sun from '../static/images/sun-on-buildings.jpg'
import Stylesheet from '../static/stylesheets/BackGroundSlider.css'
import FrontForSlider from '../SharedComponents/FrontForSlider'
import Test from '../static/images/godafoss-1840758.jpg'

export default class BackGroundSlider extends React.Component {

    constructor(){
        super();
        this.state = {
            current_word: "1"
        }
    }

    changeState(word){
        this.setState({
            current_word: word
        })
    }


    render(){
        let style;
        if(false|| !!document.documentMode){
            style={
                height:'600px',
                overflowX:'hidden'
            }
        }else{
            style={};
        }

        return(
            <div className ="row">
                <div className ="col-md-12">
                    <div id = "BackgroundSlider" style={{height:507}}>
                        <Carousel controls={false} className={"back-slider"}>
                            <Carousel.Item >
                                <img className={"picture"}  style={style} src={test} />
                                    <Carousel.Caption>
                                        <p style={{ marginBottom: 110}} className={"caption"}> energy</p>
                                    </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className={"picture"} style={style} src={cliff} />
                                <Carousel.Caption>
                                    <p style={{ marginBottom: 110}} className={"caption"}> water</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div >
                        <div className ="col-md-12 text-center">
                                <p id={"slogan"}>
                                    Like Creating
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    out of thin air
                                </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

};