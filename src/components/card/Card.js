import React from "react";
import { CardStyle, CardBorder, ImgStyle, CardContent } from './style'
import pic from '../../assets/images/WmFwZndlY212bXZtRW1tbW1tYm11Y2NOdmN0d1Btdm1JUA.jpg'
import { Link } from "react-router-dom"
const data = [{
        id: 1,
        img: "../../assets/images/fullScreen.jpg",
        title: "me before you",

    },
    {
        id: 2,
        // img: "",
        title: "Chhorii ",
        description: "Eight-month pregnant Sakshi must save herself and her unborn child from the evil within society and from the fear that lies in the paranormal world.",
        // img: 'images/WmFwZndlY212bXZtRW1tbW1tYm11Y2NOdmN0d1Btdm1JUA.jbg',
    },
    {
        id: 3,
        img: "../../assets/images/fullScreen.jpg",
        title: "me before you",

    },
    {
        id: 4,
        img: "../../assets/images/fullScreen.jpg",
        title: "me before you",

    },
    {
        id: 5,
        img: "../../assets/images/fullScreen.jpg",
        title: "me before you",

    },
    {
        id: 6,
        img: "../../assets/images/fullScreen.jpg",
        title: "me before you",

    },
    {
        id: 7,
        img: "../../assets/images/fullScreen.jpg",
        title: "me before you",

    },
    {
        id: 8,
        img: "../../assets/images/fullScreen.jpg",
        title: "me before you",

    },
]

function Card() {
    return ( <
        CardStyle > {
            data.map((value) => ( <
                CardBorder key = { value.id } >
                <
                Link to = "/Details" >
                <
                ImgStyle src = { pic }
                /></Link > <
                CardContent >
                <
                h5 > { value.title } < /h5> < /
                CardContent > < /
                CardBorder >

            ))
        } <
        /CardStyle>      
    )
}

export default Card;