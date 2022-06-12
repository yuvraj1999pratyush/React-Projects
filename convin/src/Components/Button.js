import React from "react";
import fetchOneAction from "../redux/actions/fetchOneAction.js";
import { useDispatch} from 'react-redux';

export default function Button(props){
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(fetchOneAction(props.id));
    }

    return (
        <button className="Button" onClick={handleClick}>
            {props.num}   
        </button>
    )
}