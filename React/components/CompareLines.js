import React from "react";

import "../styles/compareLines.scss";

function CompareLines({check, children}){
    return(
        <div className="compareLines">
            <span>{children}</span>
            <span>{check}</span>
        </div>        
    );
}

export default CompareLines;