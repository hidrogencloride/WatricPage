import React from 'react'

export default class MoreInfo extends React.Component{





    render(){
        return(
            <div className={this.props.activeClass + " " +this.props.section}>
                <h1>TEST</h1>
                <div className={"row"}>

                </div>
                <div className={"row"}>
                    <div className={"col-xs-offset-6"}>
                        <span onClick={()=>{this.props.hideInfo()}}  className={"glyphicon glyphicon-chevron-up"}></span>
                    </div>
                </div>
            </div>
        );
    }

}