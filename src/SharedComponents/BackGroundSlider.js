import React from 'react'

import {Carousel} from 'react-bootstrap'
import test from '../static/images/niagara-218591_1920.jpg'
import cliff from '../static/images/cliffs-climbing-clouds-746421.jpg'
import sun from '../static/images/sun-on-buildings.jpg'
import Stylesheet from '../static/stylesheets/BackGroundSlider.css'
import FrontForSlider from '../SharedComponents/FrontForSlider'
import Test from '../static/images/godafoss-1840758.jpg'

export default class BackGroundSlider extends React.Component {


    render(){
        return(
                <div style={{height:507}}>
                    <Carousel controls={false} >
                        <Carousel.Item>
                            <img height={500} width={"100%"} alt="900x500" src={test} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img  src={cliff} width={"100%"} height={500}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={"100%"} height={500} alt="900x500" src={Test} />
                        </Carousel.Item>
                    </Carousel>
                </div>

        );
    }
};