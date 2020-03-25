import React, { useState,useEffect} from 'react';
import Input from '../components/input';
import GradientColorPicker from '../components/gradientColorPicker';
import CopyTo from './copyToClipBoard'
import linear from '../assets/linear.module.css';
import CodeContainer from '../components/codeContainer';

const LinearGradient = () =>{
    const [copied, setCopied] = useState(false);
    const [direction, setDirection] = useState('');
    const [degree, setDegree] = useState(0);
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
    ]);
    useEffect(() => {
        setDirection('')
    },[degree]);
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
    };
    const removeColor = (index) =>{
        const modifiedColors = [...colors]
        modifiedColors.splice(index,1)
        setColors(modifiedColors)
    };
    const colorString = colors.reduce((a,e,i) =>{
        const color = `rgba(${e.value.r},${e.value.g},${e.value.b},${e.value.a})`
        if(i === colors.length-1){
            a = e.stop > 0 ? a + color + ' ' + e.stop +'%': a + color
        }else{
            a = e.stop > 0 ? a + color + ' ' + e.stop +'%' + ', ' : a + color  + ', '
        }
        return a
    },'');
    const gradientString = () =>{
        if(direction){
            return `linear-gradient(${direction + ', ' + colorString})`
        }
        if(degree){
            return `linear-gradient(${degree + 'deg, ' + colorString})`
        }
        if(!degree && !direction){
            return `linear-gradient(${colorString})`
        }
    };
    return (
        <div className={linear.container + " row" }>
            <div className="col-lg-g col-md-4 col-sm-12">
                <div>
                    <form>
                        <div>
                            <h3>Select Colors</h3>
                            <div>
                                <span className={linear.addColor}>Add Color</span>
                                <i className="fas fa-plus-circle" onClick={addNewColor}>
                                </i>
                            </div>

                            <div className={linear.colorSelector}>
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
                            <label htmlFor="directions">Select Directions</label>
                            <select id="directions" className="form-control" value={direction} onChange={ e=> {
                                setDirection(e.target.value)
                            }}>
                                <option value="">unset</option>
                                <option value="to bottom">to bottom</option>
                                <option value="to top">to top</option>
                                <option value="to left">to left</option>
                                <option value="to right">to right</option>
                                <option value="to bottom left">to bottom left</option>
                                <option value="to bottom right">to bottom right</option>
                                <option value="to top left">to top left</option>
                                <option value="to top right">to top right</option>
                            </select>
                        </div>
                        <div>
                            <Input containerClassName={linear.inputContainer} labelClassName={linear.labelContainer} type={'range'} label={'Select Degree'} min={'-360'} max={'360'} step={'1'} value={degree} onInputChange={setDegree} />
                        </div>
                    </form>
                </div>
            </div>
            <div className={linear.gradientBoxContainer + " col-lg-g col-md-8 col-sm-12 d-flex align-items-end flex-column" }>
                <div className={linear.gradientBox} style={{background: gradientString() }}></div>
                <CodeContainer>
    <span className={linear.gradientText}>
          {`background:` + gradientString()}
    </span>
                </CodeContainer>
                <div className="mt-3 mb-3">
                    <CopyTo text={`background:` + gradientString()} onCopy={()=> setCopied(true)}
                    />
                </div>
            </div>
        </div>
    )
};

export default LinearGradient;

