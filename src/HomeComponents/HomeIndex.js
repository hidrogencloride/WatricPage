import React from 'react'
import Navigation from './Navigation'
import  ImageArea from './ImageArea'
import AboutUs from '../AboutUsComponents/AboutUs'
import ProjectArea from './ProjectArea'

export default class HomeIndex extends React.Component{

    render(){
        return(
            <div>

                <ImageArea />
                <AboutUs />
                <ProjectArea />

            </div>
        );
    }
}
