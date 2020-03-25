import React, { useState } from 'react';
import Input from '../components/input';
import GradientColorPicker from '../components/gradientColorPicker';
import radial from '../assets/radial.module.css';
import CopyTo from './copyToClipBoard';
import CodeContainer from '../components/codeContainer';


const RadialGradient = () =>{
    const [copied, setCopied] = useState(false)
    const [direction, setDirection] = useState('')
    const [shape, setShape] = useState('')
    const [centerX, setCenterX] = useState(50)
    const [centerY, setCenterY] = useState(50)
    const [colors, setColors] = useState([
        {
            value:{
                r: '19',
                g: '241',
                b: '134',
                a: '1'
            },
            stop:0
        },
        {
            value:{
                r: '23',
                g: '21',
                b: '20',
                a: '1'
            },
            stop:0
        }
    ])
    const addNewColor = () =>{
        setColors([...colors,{
            value:{
                r: '19',
                g: '241',
                b: '134',
                a: '1'
            },
            stop:0
        }])
    }
    const removeColor = (index) =>{
        const modifiedColors = [...colors]
        modifiedColors.splice(index,1)
        setColors(modifiedColors)
    }
    const colorString = colors.reduce((a,e,i) =>{
        const color = `rgba(${e.value.r},${e.value.g},${e.value.b},${e.value.a})`
        if(i === colors.length-1){
            a = e.stop > 0 ? a + color + ' ' + e.stop +'%': a + color
        }else{
            a = e.stop > 0 ? a + color + ' ' + e.stop +'%' + ', ' : a + color  + ', '
        }
        return a
    },'')

    const gradientString = () =>{
        if(!shape && !direction){
            return `radial-gradient(${'at ' + centerX + '%' + ' ' + centerY + '%' + ', '}${colorString})`
        }
        else if(shape && !direction){
            return `radial-gradient(${shape + ' at ' + centerX + '%' + ' ' + centerY + '%' + ', '}${colorString})`
        }else if(shape && direction){
            return `radial-gradient(${shape + ' ' + direction + ' at ' + centerX + '%' + ' ' + centerY + '%' + ', '}${colorString})`
        }
        else if(!shape){
            return `radial-gradient(${'at ' + centerX + '%' + ' ' + centerY + '%' + ', '}${colorString})`
        }
    }
    return (
        <div className={radial.container + " row" }>
            <div className="col-lg-g col-md-4 col-sm-12">
                <form>
                    <div>
                        <h3>Select Colors</h3>
                        <div>
                            <span className={radial.addColor}>Add Color</span>
                            <i className="fas fa-plus-circle" onClick={addNewColor}>
                            </i>
                        </div>

                        <div className={radial.colorSelector}>
                            {colors.map((el,i,arr) =>{
                                return(
                                    <GradientColorPicker
                                        label={`Color ${i + 1}`}
                                        key={i} index={i}
                                        colors={arr}
                                        stop={el.stop}
                                        color={el.value}
                                        setColors={setColors}
                                        removeColor={removeColor}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="directions">Select Shapes</label>
                        <select id="directions" className="form-control" onChange={ e=> {
                            setShape(e.target.value)
                        }}>
                            <option value="">unset</option>
                            <option value="circle">circle</option>
                            <option value="ellipse">ellipse</option>
                        </select>
                    </div>
                    {shape &&
                    <div className="form-group">
                        <label htmlFor="directions">Select Directions</label>
                        <select id="directions" className="form-control" onChange={ e=> {
                            setDirection(e.target.value)
                        }}>
                            <option value="">unset</option>
                            <option value="closest-corner">closest-corner</option>
                            <option value="closest-side">closest-side</option>
                            <option value="farthest-corner">farthest-corner</option>
                            <option value="farthest-side">farthest-side</option>
                        </select>
                    </div>
                    }
                    <div>
                        <Input
                            containerClassName={radial.inputContainer}
                            labelClassName={radial.labelContainer}
                            type={'range'}
                            label={'CenterX'}
                            step={'1'}
                            value={centerX}
                            onInputChange={setCenterX}
                        />
                        <Input
                            containerClassName={radial.inputContainer}
                            labelClassName={radial.labelContainer}
                            type={'range'} label={'CenterY'}
                            step={'1'} value={centerY}
                            onInputChange={setCenterY}
                        />
                    </div>
                </form>
            </div>
            <div className={radial.gradientBoxContainer + " col-lg-g col-md-8 col-sm-12 d-flex align-items-end flex-column" }>
                <div className={radial.gradientBox} style={{background: gradientString() }}></div>
                <CodeContainer>
       <span className={radial.gradientText} >
  {'background:' + gradientString()}
  </span>
                </CodeContainer>
                <div className="mt-3 mb-3">
                    <CopyTo text={gradientString()} onCopy={()=> setCopied(true)}

                    />
                </div>
            </div>
        </div>
    )
}

export default RadialGradient;
