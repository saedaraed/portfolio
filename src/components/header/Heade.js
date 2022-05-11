import React from "react";
// import Data from '../../components/data/Data'
import pic from '../../assets/images/1840f746-94e8-4339-b86b-be1a511562e2.jpg'
import { InnerContainer } from "../../theme/global"

import { ImgageStyle, HeaderStyle, HeaderCont, Title, Par } from './style'
const DataHeadr = [{
    id: 1,
    img: pic,
    title: "me before you",

}, ]

function Header() {

    return ( <
        >
        {
            DataHeadr.map((value) => ( <
                div key = { value.id } >
                <
                HeaderStyle >
                <
                ImgageStyle src = { value.img }
                /> <
                HeaderCont >
                <
                InnerContainer >
                <
                Title > Title < /Title> <
                Par >
                This is just description to get from api <
                /Par>                < /
                InnerContainer > < /
                HeaderCont >

                <
                /
                HeaderStyle >

                <
                /div>
            ))

        } <
        />
    )
}

export default Header;