
import React from "react";


export default function Die(props){

    const styles = {

        backgroundColor: props.isHeld ? "#59E391" : "white",

    }

    return (
        <div  style={styles} className="Die" onClick={props.holdDie}>
            <h1>{props.num}</h1>
        </div>
    );
}