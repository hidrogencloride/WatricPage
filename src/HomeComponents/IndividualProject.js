import React from 'react'

export default  class IndividualProject extends React.Component{
    constructor(){
        super();
        this.state = {
            current_class:"hideHover"
        }
    }

    showInfo(){
        this.setState({
            current_class:"showHover"
        })
    }

    hideInfo(){
        this.setState({
            current_class:"hideHover"
        })
    }

    render(){
        return(
            <div className="col-sm-6 col-md-3 individual">
                <div className="thumbnail" onMouseOver={this.showInfo.bind(this)} onMouseOut={this.hideInfo.bind(this)}>
                    <img className="projects" src={this.props.image} alt="..." />
                    <h3 style={{textAlign:"center"}}>{this.props.header}</h3>
                    <div className={"row "}>
                        <div className={"col-xs-10 col-xs-offset-1 showHover" }>
                            {this.props.children}
                        </div>
                    </div>
                    <div className={"row center"}>
                        <a className={"col-xs-offset-2 col-xs-8 btn btn-primary "}>
                            More Information
                        </a>
                    </div>
                </div>
            </div>
        )
    }

}