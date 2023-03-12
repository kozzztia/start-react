import React, {FC} from 'react';
import {images} from "./icons";
import styled from "styled-components";

interface StyledSystemIconsInterface {
    iconWidth : number;
    iconHeight : number;
    name : string;

}



const StyledSystemIcon = styled.div<StyledSystemIconsInterface>`
    position: relative;
    width: ${props => props.iconWidth}px;
    height: ${props => props.iconHeight}px;
    img{
      position: relative;
      width:100%;
      height: 100%;
      object-fit: fill;
      object-position: center;
    }
`

const SystemIcon: FC<StyledSystemIconsInterface>= (props ) => {
    const path = images[props.name].toString()
    return (
        <StyledSystemIcon {...props}>
            <img src={path} alt={props.name}/>
        </StyledSystemIcon>
    );
};

export default SystemIcon;