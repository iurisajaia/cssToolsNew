import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss'



const GradientColorPicker = (props) =>{
    const [displayColorPicker,setColorPicker] = useState(false)
    const handleClick = () => {
        setColorPicker(!displayColorPicker)
    };

    const handleClose = () => {
        setColorPicker(!displayColorPicker)
    };
    const setColor = (color) =>{
        const colorArray = [...props.colors]
        const currentColor = colorArray[props.index]
        currentColor['value'] = color.rgb
        colorArray.splice(props.index,1,currentColor)
        props.setColors(colorArray)
    }
    const setStop = (e) =>{
        const colorArray = [...props.colors]
        const currentColor = colorArray[props.index]
        currentColor['stop'] = e.target.value
        colorArray.splice(props.index,1,currentColor)
        props.setColors(colorArray)
    }
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
                top:'80px',
                position: 'absolute',
                zIndex: '2',
            },
            cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            },
            colorPickerWrapper: {
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '20px'
            },
            label:{
                fontSize:'15px',
                width:'71.5px'
            },
            stopPosition:{
                width: '30px',
                height: '26px',
                marginLeft: '21px',
                position: 'relative',
                bottom: '8px'
            },
            container:{
                width:'134px'
            },
            settings:{
                position:'relative',
                bottom:'6px',
                left:'3px'
            },
            removeColor: {
                marginLeft: '10px',
                cursor:'pointer'
            }
        }
    });
    return(
        <>
            <div style={styles.colorPickerWrapper}>
                <label style={styles.label}>
                    {props.label}
                </label>
                <div style={styles.container}>
                    <div>
                        <div style={ styles.swatch } onClick={handleClick }>
                            <div style={ styles.color } />
                        </div>
                        <input style={styles.stopPosition} type="text" value={props.stop} onChange={setStop} />
                        <span style={styles.settings}
                        >%
                            {props.index > 1 &&
                            <i
                                className="fas fa-trash"
                                onClick={() => props.removeColor(props.index)}
                                style={styles.removeColor}></i>
                            }
        </span>

                    </div>
                </div>
                { displayColorPicker ? <div style={ styles.popover }>
                    <div style={ styles.cover } onClick={ handleClose } />
                    <SketchPicker color={ props.color } onChange={setColor} />
                </div> : null }
            </div>
        </>
    )
}

export default GradientColorPicker;
