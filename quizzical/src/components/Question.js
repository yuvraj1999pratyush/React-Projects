import React from "react";
import { Markup } from 'interweave';
import Answers from "./Answers";

export default function Question(props) {
   
 
    return (
        <div className="Question">

            <h3><Markup content={props.question} /></h3>
            <div className="options">
                
                <Answers answer={props.option1} correct={props.correct} handleClick={props.getData}
                showColor={props.showColor} display={props.display}/>
                <Answers answer={props.option2} correct={props.correct} handleClick={props.getData}
                showColor={props.showColor} display={props.display}/>
                <Answers answer={props.option3} correct={props.correct} handleClick={props.getData}
                showColor={props.showColor} display={props.display}/>
                <Answers answer={props.option4} correct={props.correct} handleClick={props.getData}
                showColor={props.showColor} display={props.display}/>

            </div>

        </div>


    );

}