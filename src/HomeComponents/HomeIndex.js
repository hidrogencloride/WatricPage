import React from 'react'
import ImageArea from './ImageArea'
import InfoArea from '../SharedComponents/InfoArea'
import ProjectArea from './ProjectArea'
import AboutUsImage from '../static/images/About-Us-Banner.jpg'
import BackGroundSlider from '../SharedComponents/BackGroundSlider'
import FrontForSlider from '../SharedComponents/FrontForSlider'
import Footer from './Footer'
import Logo from '../static/Logo/Logo.jpg'
import Navigation from './Navigation'
import HOMEINDEX from '../static/stylesheets/HOMEINDEX.css'
export default class HomeIndex extends React.Component{

    render(){

        return(
            <div>
                <Navigation/>
                <ImageArea />
                <BackGroundSlider/>
                <FrontForSlider/>
                <ProjectArea />
                <InfoArea id={"SERVICES"} backColor={"black"} textColor={"white"} image={AboutUsImage} attachment={"fixed"} opacity={0.6}>
                    <h1 style={{textAlign:"center"}}>ER</h1>
                    <h3 style={{textAlign:"center"}}>Optimization Services</h3>
                    <p>[INSERT ER OPTIMIZATION TEXT]</p>
                </InfoArea>
                <InfoArea id={"CONTACT"} backColor={"white"} textColor={"black"} image={""} attachment={"fixed"} opacity={1}>
                    <div className={"row"}>
                        <div className={"col-sm-12"} >
                            <h1 id={"SUPPORT"}> SUPPORT US </h1>
                        </div>
                    </div>
                    <div>
                        <div className={"col-sm-4"}>
                            <img className={"img img-responsive"} src={Logo} />
                        </div>
                    </div>
                </InfoArea>
                <Footer />
            </div>
        );
    }
}
