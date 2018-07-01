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
            <div id={"ABOUT"} className={"front-part"}>
                <h1 style={{opacity:"1"}}>
                    About Us
                </h1>
                <p>
                    Text
                </p>
            </div>
        )
    }



}