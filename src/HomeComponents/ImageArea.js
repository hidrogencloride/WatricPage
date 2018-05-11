import React from 'react'
import BigLogo from '../static/images/FullSizeRender.jpg'

export default class ImageArea extends React.Component{

    render(){
        let style ={
            height: "350px"
        };
        return (
            <div style={style} className={"row image-area"} >
                <img style={{height:"500px", marginRight:"auto", marginLeft:"auto", marginTop:"-170px"}}
                     className={"img img-responsive"} src={BigLogo} />
            </div>
        )
    }
}
