import React from "react";
import styled from "styled-components";

const Nav = styled.div`

    width: 100%;
    height: 70px;
    background-color: #bc16dd;
    display: flex;
    justify-content: space-between;
`;

class Navbar extends  React.Component{
    render(){
        return (
            <>
            <Nav>
                <div className="title" >
                    Movie-App
                </div>
                <div>
                    <img alt="Cart Icon" alt="Cart Icon" />
                    <span>3</span>
                </div>
                </Nav>
            </>
        );
    }
}

export default Navbar;