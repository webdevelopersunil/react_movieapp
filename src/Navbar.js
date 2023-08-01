import React from "react";
import styled from "styled-components";

class Navbar extends  React.Component{
    render(){
        return (
            <>
            <div className="nav" >
                <div className="title" >
                    Movie-App
                </div>
                <div>
                    <img alt="Cart Icon" alt="Cart Icon" />
                    <span>3</span>
                </div>
            </div>
            </>
        );
    }
}

export default Navbar;