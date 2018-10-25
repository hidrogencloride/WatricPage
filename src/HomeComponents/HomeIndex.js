import React from 'react'
import ImageArea from './ImageArea'
import InfoArea from '../SharedComponents/InfoArea'
import ProjectArea from './ProjectArea'
import AboutUsImage from '../static/images/cabinet-contemporary-counter-1080721.png'
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

                    <p id={"ER-Body"} align="left" style={{ paddingLeft:'4%', marginTop:'5%'}}>
                        Now you have the option of cutting down your costs
                        <br/>
                        of water and energy in your home, even if you don't own a renewable energy system.
                    </p>
                    <p className={"learn-more"} align="right">
                        Click <a href="#">here</a> and start today!
                    </p>
                </InfoArea>

                <InfoArea id={"CONTACT"} backColor={"white"} textColor={"black"} image={""} attachment={"fixed"} opacity={1}>
                    <div className={"row"}>
                        <div className={"col-sm-12"} >
                            <h1 id={"SUPPORT"}> SUPPORT US </h1>
                            <p id={"SUPPORT-Body"}>
                                Help us construct a sustainable world!
                                <br/><br/>
                                If you’re passionate about renewable resources and believe our project can make an
                                impact, you can start supporting us today. Every donation counts, with your help we
                                will continue to help people with low resources decrease water and energy consumption.
                            </p>
                        </div>
                    </div>
                </InfoArea>
                <Footer />
            </div>
        );
    }
}
