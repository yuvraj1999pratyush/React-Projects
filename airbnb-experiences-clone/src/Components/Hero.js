import React from "react";

import exp from "../Images/airbnb-exp.png";

export default function Hero() {

    return (
        <section>
            <img src={exp}/>
            <h1>Online Experiences</h1>
            <p>“Travel like a human”</p>
        </section>
    );
}