import React from 'react'
import Contact from '../static/images/header-contact-us.jpg'

export default class InfoArea extends React.Component{

    render(){
        let style ={
            height: "500px",
            backgroundColor:"#cccccc",
            marginTop:"-10px",
            backgroundImage: "url("+this.props.image+")",
            backgroundAttachment:this.props.attachment,
            backgroundRepeat: "no-repeat no-repeat",
        };

        return (
            <div style={style} className={"row"}>
                <div style={{height:"500px", padding:"50px", width:"100%", backgroundColor:"white", opacity:this.props.opacity}}>
                    <div style={{opacity:1}}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );

    }
}