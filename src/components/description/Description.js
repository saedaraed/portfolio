import React from "react";
import { DescriptionStyle, Desc, ImgStyle, DescContent, TitleStyle, ParStyle } from './style'
import pic from '../../assets/images/36c22efa-4cf2-446c-8425-31cc6701f478.jpg'
const details = [{
    img: pic,
    title: "Movie Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rate: "imbda pating"

}]

function Description() {

    return ( <
        DescriptionStyle > {
            details.map((value) => ( <
                Desc key = { value } >

                <
                ImgStyle src = { pic }
                /> <
                DescContent >
                <
                TitleStyle > { value.title } < /TitleStyle > <
                ParStyle > { value.description } < /ParStyle> <
                ParStyle > { value.rate } < /ParStyle> < /
                DescContent > < /
                Desc >

            ))
        } <
        /DescriptionStyle>
    )
}

export default Description;