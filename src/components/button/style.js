import styled from "styled-components";

export const ButtonStyle = styled.button `
  background-color: ${(props)=> props.variant === 'bg' ? '#3EBCFA' : 'red'};
  width: 150px;
  height: 30px;
  color: #fff;
  border: none;
  border-radius: 13px;
  font-weight: bold;
`;