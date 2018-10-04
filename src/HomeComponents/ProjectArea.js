import React from 'react'
import Droplet from '../static/Logo/Drop.png'
import Wind from '../static/Logo/Wind.png'
import Electric from '../static/Logo/Electric.png'
import NonNatural from '../static/Logo/NonNatural.png'
import IndividualProject from './IndividualProject'
import ProjectsCSS from '../static/stylesheets/ProjectArea.css'

export default class ProjectArea extends React.Component{

    render(){

        return(
            <div className={"row"} id="PRODUCTS" style={{marginTop:100, paddingBottom: 50}}>
                <h1 style={{textAlign:"center",marginBottom:"25px"}}>
                    PRODUCTS
                </h1>

                <IndividualProject  image={Droplet} header={"WATER"} link={"/"}>
                    <p> Imagine sustainability not only on
                        energy but also on water. Taking atmospheric
                        water generators to another level. Giving
                        you the ability to produce your water at home
                        extracting it directly from air.
                    </p>

                </IndividualProject>

                <IndividualProject image={Wind} header={"WIND"}>
                    <p> Why limit yourself to produce energy
                        only on day hours when you can do it during
                        all day and all night? With our vertical wind turbines
                        we can give you a constant source of energy to decrease
                        your energy consumption at home.
                    </p>
                </IndividualProject>

                <IndividualProject image={NonNatural} header={"NON-NATURAL WIND"}>
                    <p> Have you ever felt the wind produced by the speed of a car?
                        In Watric Energy Resources use the wind produced by cars
                        movement to generate energy. Within the purpose of use it
                        for the illumination of our highways bringing sustainability
                        to our roads.
                    </p>
                </IndividualProject>

                <IndividualProject image={Electric} header={"ILLUMINATION"}>
                    <p>
                        Have you noticed that even if there is no traffic flow the lights
                        on the road remain on? With our smart lighting system we eliminate the waste of energy
                        and save up to a 42% of the energy used on illumination.
                    </p>
                </IndividualProject>

            </div>);
    }

}