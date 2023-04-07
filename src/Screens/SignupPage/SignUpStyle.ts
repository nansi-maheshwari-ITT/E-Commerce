import styled from "styled-components";
import theme from "../../Theme";

const SignUpFormContainer=styled.div`
width:100vw;
height:100vh;
background: linear-gradient(
    135deg,
    ${theme.colors.tertiary},
    ${theme.colors.background}
  );
  color: ${theme.colors.text};
position:fixed;

.form-container{
	display:flex;
	align-items:center;
	flex-direction:column;
	width:35%;
	height:fit-content;
	background:
    ${theme.colors.background}
  ;
	  border-radius:10px;
	margin:10px auto;
	padding-bottom:20px;
	opacity: 0;
	transform: translateX(-40px);
	transition: all 0.3s ease-in-out;
}


.form-container.active {
	opacity: 1;
	transform: translateX(0);
  }
 
  
.form-container:hover {
	border-radius:10px;
    opacity: 1;
    border:1px solid ${theme.colors.tertiary};
   
  }

form{
	display:inline-block;
	width:80%;
}

.form-heading{
	border-bottom:solid 1px #808d80;
    width: 70%;
	width:70%;
	text-align:center;
	padding:25px;
	font-size:28px;
	font-weight:bold;

}

button{
	width:90%;
	background-color: ${theme.colors.primary};
	padding:18px;
	border-radius:5px;
	margin:20px 0px;
	border:none;
	color:${theme.colors.secondary};
	font-size:15px;
	font-weight:bold;
}

a{
	margin:0px 20px;
	color: ${theme.colors.link};
	
}

.error-message{
	color: ${theme.colors.error};
}
`

export {SignUpFormContainer}