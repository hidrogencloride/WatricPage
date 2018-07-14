import React from "react";
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import Generic from '../static/images/generic-avatar.png'
import BackGroundSlider from "../SharedComponents/BackGroundSlider";
export default class Navigation extends React.Component{

    render(){
        let Style={
           marginBottom:10
        };
        return(
            <div>
                <Navbar>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem href={"/"}>
                                Go Back
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className={"container"} >
                    <h1>Title</h1>
                    <div style={Style} className={"row"} >
                        <div className={"col-md-6"}>
                            <img className={"img img-responsive"} src={Generic} />
                        </div>
                        <div className={"col-md-6"}>
                            <h4>fvdnfvkdnvlsdkfnvdsfklvndskldfnvdk
                                lfnvlkdsnfvlsdknfvlkjdfnvlksdnvlksd
                                dfsnvjfdnvdskjlfnvsdknjvlkdfnvlskdfkvsd
                                dfv;dslfnvsdnfv;dsfnvkjdsvnskdjvnsjdkfnv
                                sdfjvnldkfnvlksdfnvdlkfjvnldskfvndslkf
                            </h4>
                        </div>
                    </div>
                    <div style={Style} className={"row"} >
                        <div className={"col-md-6"}>
                            <img className={"img img-responsive"} src={Generic}/>
                        </div>
                        <div className={"col-md-6"}>
                            <h4>fvdnfvkdnvlsdkfnvdsfklvndskldfnvdk
                                lfnvlkdsnfvlsdknfvlkjdfnvlksdnvlksd
                                dfsnvjfdnvdskjlfnvsdknjvlkdfnvlskdfkvsd
                                dfv;dslfnvsdnfv;dsfnvkjdsvnskdjvnsjdkfnv
                                sdfjvnldkfnvlksdfnvdlkfjvnldskfvndslkf
                            </h4>
                        </div>
                    </div>
                    <div style={Style} className={"row"} >
                        <div className={"col-md-6"}>
                            <img className={"img img-responsive"} src={Generic} />
                        </div>
                        <div className={"col-md-6"}>
                            <h4>fvdnfvkdnvlsdkfnvdsfklvndskldfnvdk
                                lfnvlkdsnfvlsdknfvlkjdfnvlksdnvlksd
                                dfsnvjfdnvdskjlfnvsdknjvlkdfnvlskdfkvsd
                                dfv;dslfnvsdnfv;dsfnvkjdsvnskdjvnsjdkfnv
                                sdfjvnldkfnvlksdfnvdlkfjvnldskfvndslkf
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
