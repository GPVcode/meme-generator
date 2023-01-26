import React from "react";
import trollFace from "../images/troll-face.png"
import logo from "../images/2.png"

const Header = () => {

    return(
        <header className="header">
            <img src={trollFace} className="header--image" alt="trollface"/>
            <h2 className="header--title">Meme Generator</h2>
            <img src={logo} className="header--logo" alt="logo"/>
            {/* <h4 className="header--project">GPVdev</h4> */}
        </header>
    )

}

export default Header