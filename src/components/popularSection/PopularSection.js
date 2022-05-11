import React from "react";
import Button from "../button/Button"
import Card from "../card/Card"
import { ButtonStyle } from "../../components/button/style";
import { InnerContainer } from '../../theme/global'
import { PopularSectionStyle, TitleStyle } from './style'

function PopularSection() {
    return ( <
        PopularSectionStyle >

        <
        InnerContainer >
        <
        TitleStyle > Popular Movies < /TitleStyle> <
        Card / >
        <
        /InnerContainer> <
        br / >

        <
        ButtonStyle variant = "bg"
        children = "Load More ..." / > < /
        PopularSectionStyle >
    )

}

export default PopularSection;