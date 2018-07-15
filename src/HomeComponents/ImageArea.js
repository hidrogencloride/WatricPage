import React from 'react'
import BigLogo from '../static/images/FullSizeRender.jpg'
import RectLogo from '../static/images/Logos/watric-rect.jpg'


export default class ImageArea extends React.Component{

    render(){

        let imageStyle;
        let toRender;
        if(false || !!document.documentMode) {
            console.log("enered");
            imageStyle = {
                height: "140px",
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: "100px",
                marginBottom:"auto"
            }
            toRender = RectLogo
        }else{
            imageStyle = {
                height:"500px",
                marginRight:"auto",
                marginLeft:"auto",
                marginTop:"-170px"};
            toRender = BigLogo
        }

        let style ={
            height: "350px"
        };
        return (
            <div style={style} className={"row image-area"} >
                <img style={imageStyle}
                     className={"img img-responsive"} src={toRender} />
            </div>
        )
    }
}
