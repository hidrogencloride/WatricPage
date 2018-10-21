import React from 'react'
import FooterCSS from '../static/stylesheets/Footer.css'
export default class Footer extends React.Component{
    render(){
        return(
            <div className={"footer"} align="right">
                <h3 className={"follow"}>Follow us:</h3>
                <a href="https://www.facebook.com/WatricEnergyResources/" className="fa fa-facebook"></a>
                <a href="https://www.instagram.com/watric.er/" className="fa fa-instagram"></a>
            </div>


        )
    }
}