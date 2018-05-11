import React from 'react'
import Navigation from './Navigation'
import  ImageArea from './ImageArea'
import InfoArea from '../SharedComponents/InfoArea'
import ProjectArea from './ProjectArea'
import AboutUsImage from '../static/images/About-Us-Banner.jpg'
import ContactUsImage from '../static/images/header-contact-us.jpg'

export default class HomeIndex extends React.Component{

    render(){
        return(
            <div>
                <ImageArea />
                <InfoArea image={AboutUsImage} attachment={"fixed"} opacity={0.7} >
                    <h1>Test</h1>
                </InfoArea>
                <ProjectArea />
                <InfoArea image={ContactUsImage} attachment={"initial"} opacity={0}/>
            </div>
        );
    }
}
