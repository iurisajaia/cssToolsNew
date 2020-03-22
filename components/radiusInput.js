
import React from 'react'

export default function RadiusInput(props){
    const {type, value, min,max,step,onInputChange , id , name,inputClassName} = props;

    return (
        <>
            <input
                value={value}
                min={min ? min : 0}
                max={max ? max : 100}
                step={step ? step : 1}
                className={inputClassName}
                name={name}
                id={id}
                type={type}
                onChange={e => onInputChange(e.target.value)}
            />
            <style jsx>
                {`
               input[type="range"] {
                -webkit-appearance: none;
               }
               
               input[type="range"]:focus {
                outline: none;
               }
               input[type="range"]::-webkit-slider-thumb {
                cursor:pointer;
                -webkit-appearance: none;
                height: 20px;
                width: 20px;
                background-image: linear-gradient(135deg, #9be15d 0%, #00d9a6 100%);
                margin-top: -3px;
                border-radius: 50%;
               }
               
               input[type="range"]::-moz-range-thumb {
                cursor:pointer;
                height: 20px;
                width: 20px;
                background-image: linear-gradient(135deg, #9be15d 0%, #00d9a6 100%);
                margin-top: -3px;
                border-radius: 50%;
               }
               `}
            </style>
        </>
    )
}
