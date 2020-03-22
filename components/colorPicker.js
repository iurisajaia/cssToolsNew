import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss'



const ColorPicker = (props) =>{
    const [displayColorPicker,setColorPicker] = useState(false);
    const handleClick = () => {
        setColorPicker(!displayColorPicker)
    };

    const handleClose = () => {
        setColorPicker(!displayColorPicker)
    };
    const styles = reactCSS({
        'default': {
            color: {
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: `rgba(${ props.color.r }, ${ props.color.g }, ${ props.color.b }, ${ props.color.a })`,
            },
            swatch: {
                height:'25px',
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
            },
            popover: {
                position: 'absolute',
                bottom:'0px',
                left:'0px',
                zIndex: '2',
            },
            cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            },
        },
    });
    return(
        <div className='colorPickerWrapper'>
            <label>{props.label}</label>
            <div style={ styles.swatch } onClick={handleClick }>
                <div style={ styles.color } />
            </div>
            { displayColorPicker ? <div style={ styles.popover }>
                <div style={ styles.cover } onClick={ handleClose }/>
                <SketchPicker color={ props.color } onChange={ color=> props.setColor(color.rgb) } />
            </div> : null }
            <style jsx>{`
         .colorPickerWrapper{
             display:flex;
             justify-content:space-between;
             margin-bottom:20px;
         }
         label{
           font-size:15px;
         }
        `}</style>
        </div>
    )

};

export default ColorPicker;
