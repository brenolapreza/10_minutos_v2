import React from 'react'
import { AccordianWrapper, AccordianShow, AccordianContainer } from "./style";

export default function AccordianEpisode(props){
    return(
        <>
        <AccordianContainer>
            <img src={props.imgUrl} alt="img"/>
            <AccordianWrapper>
                <div className="contentLink">
                    <a href={props.linkToWatch}>{props.textLinkToWatch}</a> 
                </div>
                    <h3>{props.titleWatch}</h3>
                    <p>{props.descriptionWatch}</p>
                </AccordianWrapper>
        </AccordianContainer>
        </>
    )
}