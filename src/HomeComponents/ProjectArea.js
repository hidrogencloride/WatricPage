import React from 'react'
import Droplet from '../static/images/Dropletreal.png'
import Wind from '../static/images/Wind.png'
import Electric from '../static/images/Electric.png'
import NonNatural from '../static/images/NonNatural.png'
import IndividualProject from './IndividualProject'
import MoreInfo from './MoreInfo'
import ProjectsCSS from '../static/stylesheets/ProjectArea.css'
import MoreInfoCSS from '../static/stylesheets/MoreInfo.css'

export default class ProjectArea extends React.Component{

    constructor(){
        super();

        this.state = {
            activeClass : "no-info",
            section: "",
            hideCarousel: false
        }

    }

    onClick(section){
        let activeClass = "show-info";
        this.setState({
            section: section,
            activeClass: activeClass,
            hideCarousel: false
        });
    }

    hideInfo(){
        console.log("hiding info");
        this.setState({
            activeClass: "no-info",
            hideCarousel:true
        });
    }

    render(){

        return(
            <div className={"row"} id="PRODUCTS" style={{marginTop:100, paddingBottom: 50}}>
                <MoreInfo hideInfo = {()=>{this.hideInfo();}}
                            section = {this.state.section}
                                activeClass={this.state.activeClass}
                                    hideCarousel = {this.state.hideCarousel}
                />
                <h1 style={{textAlign:"center",marginBottom:"25px"}}>
                    PRODUCTS
                </h1>

                <IndividualProject  onClick={()=>{this.onClick("WATER")}} image={Droplet} header={"WATER"} link={"/"}>
                    <p> Imagine sustainability not only on
                        energy but also on water. Taking atmospheric
                        water generators to another level. Giving
                        you the ability to produce your water at home
                        extracting it directly from air.
                    </p>

                </IndividualProject>

                <IndividualProject onClick={()=>{this.onClick("WIND")}}  image={Wind} header={"WIND"}>
                    <p> Why limit yourself to produce energy
                        only on day hours when you can do it during
                        all day and all night? With our vertical wind turbines
                        we can give you a constant source of energy to decrease
                        your energy consumption at home.
                    </p>
                </IndividualProject>

                <IndividualProject onClick={()=>this.onClick("NNWIND")} image={NonNatural} header={"NON-NATURAL WIND"}>
                    <p> Have you ever felt the wind produced by the speed of a car?
                        In Watric Energy Resources use the wind produced by cars
                        movement to generate energy. Within the purpose of use it
                        for the illumination of our highways bringing sustainability
                        to our roads.
                    </p>
                </IndividualProject>

                <IndividualProject onClick={()=>{this.onClick("ILLUMINATION")}} image={Electric} header={"ILLUMINATION"}>
                    <p>
                        Have you noticed that even if there is no traffic flow the lights
                        on the road remain on? With our smart lighting system we eliminate the waste of energy
                        and save up to a 42% of the energy used on illumination.
                    </p>
                </IndividualProject>

            </div>);
    }

}