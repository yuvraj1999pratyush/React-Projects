import React from "react";


export default function Card(props){
    let getStatus=undefined;
    if(props.place.spots===0){
        getStatus="SOLD OUT";
    }else if(props.place.location==='online'){
        getStatus="ONLINE";
    }

    return (
        <div className="Card">
            <div>
            {getStatus && <div className="status">{getStatus}</div>}
             <div className="image-div"><img src={props.place.img} /></div>
             <div className="content">
                 <p>{props.place.rating}<span className="grey">(6) . {props.place.country}</span></p>
                 <p>{props.place.title}</p>
                 <p><span className="bold">{props.place.price}</span>/person</p>
             </div>
             </div>
        </div>
       
    );
}