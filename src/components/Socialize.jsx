import React from "react";
function Socialize (props){
    return(
        <div className="Socialize">
            <img src={props.imgUrl} alt="not-availabel" />
            <h1>{props.h1}</h1>
            <h2>{props.h2}</h2>
            <h4>{props.h4}</h4>
            {props.button ? <button>SHOP NOW</button>:""}
            {props.button1 ? <button>MADE BY RAKESH</button>:""}
        </div>
    )
}

export default Socialize;