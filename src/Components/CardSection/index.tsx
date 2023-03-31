import React from "react";
import { CardSectionProps } from "./CardSectionInterface";
import { CardDiv,Container } from "./CardSectionStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"
import { db } from "../../Firebase";
import { collection, getDoc,doc,updateDoc,arrayUnion } from "firebase/firestore";
import { useSelector } from "react-redux";
import { UserStatusInterface } from "../Navbar/NavbarInterface";
import {useState} from "react"
import { CardComponent } from "../Card";


export const CardSection: React.FC<CardSectionProps> = ({ productDetails }) => {
	
  return (
    <CardDiv>
      <h1>Get the best deals here!</h1>
      <Container>
        {productDetails.map((product, index) => (
         <CardComponent product={product}></CardComponent>
        ))}
          
      </Container>
   
    </CardDiv>
  );
};
