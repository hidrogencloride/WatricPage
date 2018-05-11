import React from 'react'

export default class ProjectArea extends React.Component{

    render(){
        let style = {

            marginTop:"100px"

        };
        return(
            <div className={"row"} style={style}>

                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src="" alt="..." />
                        <div className="caption">
                            <h3>Thumbnail label</h3>
                            <p>...</p>
                            <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#"
                                                                                                   className="btn btn-default"
                                                                                                   role="button">Button</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src="" alt="..." />
                        <div className="caption">
                            <h3>Thumbnail label</h3>
                            <p>...</p>
                            <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#"
                                                                                                   className="btn btn-default"
                                                                                                   role="button">Button</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src="" alt="..." />
                        <div className="caption">
                            <h3>Thumbnail label</h3>
                            <p>...</p>
                            <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#"
                                                                                                   className="btn btn-default"
                                                                                                   role="button">Button</a>
                            </p>
                        </div>
                    </div>
                </div>




            </div>);
    }

}