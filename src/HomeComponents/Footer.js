import React from 'react'
import FooterCSS from '../static/stylesheets/Footer.css'
import mail from '../static/images/gmail2.png'

export default class Footer extends React.Component{
    render(){
        return(
            <div className={"footer"} align="right" style={{paddingRight: "100px"}}>
                <h3 className={"follow"}>Follow Us:</h3>
                <a href="https://www.facebook.com/WatricEnergyResources/" target="_blank" className="fa fa-facebook"></a>
                <a href="https://twitter.com/search?src=typd&q=watric" target="_blank" className="fa fa-twitter"></a>
                <a href="https://www.instagram.com/watric.er/" target="_blank" className="fa fa-instagram"></a>

                <img className={"email-icon"} src={mail} align="left"/>
                <p className={"email-text"} align="left">
                    watric.er@gmail.com
                </p>
            </div>


        )
    }
}