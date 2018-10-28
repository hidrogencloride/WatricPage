import React from 'react'
import ImageArea from './ImageArea'
import InfoArea from '../SharedComponents/InfoArea'
import ProjectArea from './ProjectArea'
import AboutUsImage from '../static/images/cabinet-contemporary-counter-1080721.png'
import BackGroundSlider from '../SharedComponents/BackGroundSlider'
import FrontForSlider from '../SharedComponents/FrontForSlider'
import Footer from './Footer'
import Logo from '../static/Logo/Logo.png'
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

                <InfoArea id={"CONTACT"} backColor={"white"} textColor={"black"} image={""} attachment={"fixed"} opacity={1}>
                    <div className={"row"}>
                        <div className={"col-sm-12"} >
                            <h1 id={"SUPPORT"}> SUPPORT US </h1>
                            <div>
                                <div className={"col-sm-4"}>
                                    <img className={"img img-responsive"} src={Logo} style={{paddingBottom: 120}}/>
                                </div>
                            </div>
                            <p id={"SUPPORT-Body"}>
                                You can help us make a sustainable world faster!
                                <br/>
                                There are many ways of supporting us
                                where you will impulse our progress and take our technology into market. Click below to support us now.
                            </p>
                            <p className={"support-us"} align="right">
                                Support us <a href="https://watricpr.com/supportUs">here</a>!
                            </p>
                        </div>

                    </div>
                </InfoArea>
                <Footer />
            </div>
        );
    }
}
