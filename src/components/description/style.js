import styled from 'styled-components'
import banner from "../../assets/images/1840f746-94e8-4339-b86b-be1a511562e2.jpg"

export const DescriptionStyle = styled.div `

width: 100%;

display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 2%;
    background:url(${banner}); 
    height: 70vh;

`

export const Desc = styled.div `

width: 70%;
height: 50%;
display: flex;
justify-content: center;
margin-top: 80px;
`
export const ImgStyle = styled.img `
border: solid 3px #fff;
width: 30%;
`

export const DescContent = styled.div `

width: 100 % ;
background-color: rgba(0,0,0,0.7);;

text-align: left;
padding-left: 20px;
padding-top: 20px;
`
export const TitleStyle = styled.h5 `

color: #fff;
font-size:25px;
`
export const ParStyle = styled.p `
color: #fff;
font-weight: 100;
margin: 20px 0px;
width: 90%;


`