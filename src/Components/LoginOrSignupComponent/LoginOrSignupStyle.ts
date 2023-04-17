import styled from "styled-components";
import theme from "../../Theme";


export const ComponentWrapper=styled.div`
height:350px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin:20px auto;
width:400px;

img{
	height:250px;
	width:350px;
}


button{
	margin:0px 10px;
	padding:10px 50px;
	color:white;
	cursor:pointer;
	background-color:${theme.colors.primary};
	font-weight:bold;
	font-size:15px;
	border-radius:5px;
	border:none;

	:hover{
		color:${theme.colors.primary};
		border:1px solid ${theme.colors.primary};
		background-color:white;
	}
}
`

