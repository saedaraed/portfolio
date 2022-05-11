import React from "react";
import { CardStyle, CardBorder, ImgStyle, CardContent, H5Style, TitleStyle } from './style'
import pic from '../../assets/images/WmFwZndlY212bXZtRW1tbW1tYm11Y2NOdmN0d1Btdm1JUA.jpg'
const information = [

    {

        img: pic,
        name: "actor name",
    },
    {

        img: pic,
        name: "actor name",
    },
    {

        img: pic,
        name: "actor name",
    },
    {

        img: pic,
        name: "actor name",
    },
    {
        img: pic,
        name: "actor name",
    },
]

function Actors() {
    return ( <
        >
        <
        TitleStyle > Actors < /TitleStyle> <
        CardStyle > {
            information.map((value) => ( <
                CardBorder key = { value } >

                <
                ImgStyle src = { pic }
                /> <
                CardContent >
                <
                H5Style > { value.name } < /H5Style> < /
                CardContent > < /
                CardBorder >

            ))
        } <
        /CardStyle>     < / >
    )
}

export default Actors;