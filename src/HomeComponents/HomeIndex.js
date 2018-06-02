import React from 'react'
import  ImageArea from './ImageArea'
import InfoArea from '../SharedComponents/InfoArea'
import ProjectArea from './ProjectArea'
import AboutUsImage from '../static/images/About-Us-Banner.jpg'
import BackGroundSlider from '../SharedComponents/BackGroundSlider'
import FrontForSlider from '../SharedComponents/FrontForSlider'
import Footer from './Footer'
export default class HomeIndex extends React.Component{

    render(){
        return(
            <div>
                <ImageArea />
                <BackGroundSlider/>
                <FrontForSlider/>
                <ProjectArea />

                <InfoArea id={"SERVICES"} backColor={"black"} textColor={"white"} image={AboutUsImage} attachment={"fixed"} opacity={0.6}>
                    <h1 style={{textAlign:"center"}}>ER</h1>
                    <h3 style={{textAlign:"center"}}>Optimization Services</h3>
                </InfoArea>

                <InfoArea id={"CONTACT"} backColor={"white"} textColor={"black"} image={""} attachment={"fixed"} opacity={1}/>
                <Footer />
            </div>
        );
    }
}
