import React from 'react'

import {Carousel} from 'react-bootstrap'
import test from '../static/images/niagara-218591_1920.jpg'
import cliff from '../static/images/cliffs-climbing-clouds-746421.jpg'
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
                                <img className={""}  style={style} alt="900x500" src={test} />
                                    <Carousel.Caption >

                                        <h3 style={{marginLeft:-950}} className={"caption"}> energy</h3>

                                    </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className={""} style={style} src={cliff} />
                                <Carousel.Caption>

                                    <h3 style={{marginLeft:-950}}> water</h3>

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div id={"slogan"}>
                        <div className ="col-md-12 text-center">
                            <h3>
                                <p style={{marginLeft:-1000}}>
                                    Like Creating
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                out of thin air
                                </p>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

};