import React from "react";

export default function Card(props){

    console.log(props.data);

    return (
        <div className="Card">
            <div className="card">
                
                <img src={props.data.avatar}/>
                <div className="info">
                <h1>{props.data.first_name} {props.data.last_name}</h1>
                <p>ID: {props.data.id}</p>
                <p>Email: {props.data.email}</p>
                </div>
                
                
            </div>
        </div>
    )
}