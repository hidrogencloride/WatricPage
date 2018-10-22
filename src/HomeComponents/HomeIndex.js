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

                <InfoArea id={"SERVICES"} backColor={"rgba(0, 0, 0, 0.3)"} textColor={"white"} image={AboutUsImage} attachment={"fixed"}>
                    <h1 style={{textAlign:"center"}}>
                        ER
                    </h1>
                    <h3 style={{textAlign:"center"}}>
                        Optimization Services
                    </h3>

                    <p id={"ER-Body"}>
                        One of our principal values is to make sustainability accessible and provide options so
                        everyone can start moving to renewable energy and resources. Therefore, we started the ER
                        Optimization Service which gives the option to achieve savings on energy and water consumption
                        for those who can't afford a whole sustainable system for their houses. Click on the button
                        below to know more and get you're quote now.
                    </p>
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
