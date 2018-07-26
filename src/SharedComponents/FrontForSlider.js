import React from 'react'

export default class FrontForSlider extends React.Component{
    constructor(){
        super();
        // this.state = {
        //     curr_word: super.state.current_word
        // }
    }

    render(){
        return(
            <div id={"ABOUT"} className={"front-part"} >
                <h1 style={{opacity:"1"}}>
                    About Us
                </h1>
                <p className={"about-text"} >
                    Everything that involves sustainability is part of our interests. We want to help the world achieve a sustainable
                    future full of access to resources and renewable energy. Since our origins are from Puerto Rico, a Caribbean
                    island exposed every year to hurricanes and droughts we were born full of consciousness about the importance
                    of illumination, energy and water. This is how we decided to concentrate not only on the collective sustainability
                    but also on the individuals one. As you notice it he history of our
                    country is the reason of existence of our main products that now we want to spread all around the world.
                </p>

                <p style={{ paddingLeft:'20%', paddingRight:'20%', marginTop:'5%'}} >We bring sustainability by developing and
                    implementing new ways of resources extraction
                    and renewable energy.</p>

            </div>
        )
    }



}