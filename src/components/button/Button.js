import React from "react";
import { ButtonStyle } from "./style";

function Button(props) {
    return ( < div className = "button" >
        <
        ButtonStyle > { props.children } < /ButtonStyle> < /
        div > )

}

export default Button;