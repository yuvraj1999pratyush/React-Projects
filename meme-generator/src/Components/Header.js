import React from "react";
import logo from "../Images/meme-logo.png";

export default function Headers(){
    return(
        <div className="Header">
            <img src={logo} alt="meme" />
            <h1>Meme Generator</h1>
            <p>by @yuvraj</p>
        </div>
    );
}
