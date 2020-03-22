import React, { useState } from 'react';



const Paragraph = ({paragraphClass,inset,horizontalLength,verticalLength, blurRadius, spreadRadius, shadowColor,type}) =>{
    return (
        <p className={paragraphClass}>
            {`${type}box-shadow:${ inset ? 'inset' : ''} ${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px rgba(${ shadowColor.r }, ${ shadowColor.g }, ${ shadowColor.b }, ${shadowColor.a});`}
        </p>
    )
};

export default Paragraph;
