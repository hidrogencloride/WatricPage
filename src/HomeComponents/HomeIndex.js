import React from 'react'
import Navigation from './Navigation'
import  ImageArea from './ImageArea'
import InfoArea from '../SharedComponents/InfoArea'
import ProjectArea from './ProjectArea'
import AboutUsImage from '../static/images/About-Us-Banner.jpg'
import ContactUsImage from '../static/images/header-contact-us.jpg'
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
                <InfoArea image={AboutUsImage} attachment={"fixed"} opacity={0.6}>
                    <h1 style={{textAlign:"center"}}>ER Optimization</h1>
                </InfoArea>
                <InfoArea image={ContactUsImage} attachment={"initial"} opacity={0}/>
                <Footer />
            </div>
        );
    }
}
