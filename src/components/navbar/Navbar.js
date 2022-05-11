import React from "react";
import { NavbarStyle, H3Style } from "./style";
import { InnerContainer } from "../../theme/global"

function Navbar() {
    return ( <
        NavbarStyle >
        <
        InnerContainer >
        <
        H3Style > React Movie < /H3Style>{" "} < /
        InnerContainer > <
        /NavbarStyle>
    );
}

export default Navbar;