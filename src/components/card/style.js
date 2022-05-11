import styled from 'styled-components'

export const CardStyle = styled.div `

width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 2%;
`

export const CardBorder = styled.div `

/* width:100%; */
width: 23%;

 height: 250px; 
 position: relative;
 margin-bottom: 20px;
`
export const ImgStyle = styled.img `

width:100%;
height: 100%;
object-fit: cover;

`
export const CardContent = styled.div `
position: absolute;
top: 80%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #fff;

`