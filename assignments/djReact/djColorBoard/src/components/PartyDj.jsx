import React from "react";


export default function PartyDj(props){
function handleDjClick(){
   if (props.color[0]==="black" && props.color[1]==="white" || props.color[0] ==="white"&& props.color[0] ==="white") {
     props.setColor(["purple","purple","white","white"])
   }
   else if (props.color[0]==="white" && props.color[1]==="black"|| props.color[1]==="#BED754") {
    props.setColor(["purple","purple","white","white"])
   }
}

    return(
        <div>
            <button className="button" onClick={handleDjClick}>PartyDJ</button>
        </div>
    )
}