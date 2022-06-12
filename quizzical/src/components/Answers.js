import React from "react";
import { Markup } from 'interweave';

export default function Answers(element) {

    

    const [selected,setSelected] = React.useState({
        val:element.answer,
        correct:element.correct,
        isClicked:false,
    });
    
    function onTrigger(e){
        
        setSelected(e=>{
            return{
                ...selected,
                val:element.answer,
                isClicked:!e.isClicked,

            }
        });

        e.preventDefault();
        element.handleClick(selected);


    }



    const styles = {
        backgroundColor: element.display && element.answer === element.correct ? "#a2f099": 
        element.display && selected.isClicked && element.answer !== element.correct ? "#f09f99":
        selected.isClicked ? "#edf099" : "",
    }

    element.showColor(styles);

    return (
        
        <p style ={ styles } onClick = {onTrigger}>
            <Markup content={element.answer} />
        </p>
        
    )
}