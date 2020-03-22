import React, { useState } from 'react'
import Layout from '../components/layout';
import shadow from '../assets/shadow.module.css';
import Input from '../components/input';
import ColorPicker from '../components/colorPicker';
import CopyTo from '../components/copyToClipboard';
import CodeContainer from '../components/codeContainer';
import Paragraph from '../components/paragraph';

const Shadow = ({title,description,link}) =>{
    const [copied, setCopied] = useState(false)
    const [boxColor,setBoxColor] = useState({
        r: '241',
        g: '112',
        b: '19',
        a: '1'
    })
    const [shadowColor, setShadowColor] = useState({
        r: '0',
        g: '0',
        b: '0',
        a:'0.75'
    })
    const [backgroundColor, setBackgroundColor] = useState({
        r: '255',
        g: '255',
        b: '255',
        a: '1'
    });
    const [inset, setInset] = useState(false)
    const [horizontalLength, setHorizontalLength] = useState(10)
    const [verticalLength, setVerticalLength] = useState(10)
    const [blurRadius, setBlurRadius] = useState(5)
    const [spreadRadius, setSpreadRadius] = useState(0)

    const generateShadow = () =>{
        return `
      -webkit-box-shadow: ${inset ? 'inset' : ''} ${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px rgba(${ shadowColor.r }, ${ shadowColor.g }, ${ shadowColor.b }, ${shadowColor.a});
      -moz-box-shadow: ${inset ? 'inset' : ''} ${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px rgba(${ shadowColor.r }, ${ shadowColor.g }, ${ shadowColor.b }, ${shadowColor.a});
      box-shadow: ${inset ? 'inset' : ''} ${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px rgba(${ shadowColor.r }, ${ shadowColor.g }, ${ shadowColor.b }, ${shadowColor.a});
      `
    };
    return (
        <Layout>
            <div className={shadow.container}>

                <div className={shadow.wrapper + ' row'}>
                    <div className="col-lg-g col-md-4 col-sm-12">
                        <Input containerClassName={shadow.inputContainer} labelClassName={shadow.labelContainer} type={'range'} label={'Horizontal Length'} min={'-200'} max={'200'} step={'1'} value={horizontalLength} onInputChange={setHorizontalLength} />
                        <Input containerClassName={shadow.inputContainer} labelClassName={shadow.labelContainer} type={'range'} label={'Vertical Length'} min={'-200'} max={'200'} step={'1'} value={verticalLength} onInputChange={setVerticalLength} />
                        <Input containerClassName={shadow.inputContainer} labelClassName={shadow.labelContainer} type={'range'} label={'Blur Radius'} min={'0'} max={'300'} step={'1'} value={blurRadius} onInputChange={setBlurRadius} />
                        <Input containerClassName={shadow.inputContainer} labelClassName={shadow.labelContainer} type={'range'} label={'Spread Radius'} min={'-200'} max={'200'} step={'1'} value={spreadRadius} onInputChange={setSpreadRadius} />
                        <ColorPicker label={"Box Color"} setColor={setBoxColor} color={boxColor} />
                        <ColorPicker label={"Shadow Color"} setColor={setShadowColor} color={shadowColor} />
                        <ColorPicker label={"Background Color"} setColor={setBackgroundColor} color={backgroundColor} />
                        <div className={shadow.sliderInput}>
                            <label className={shadow.switch}>
                                <input className={shadow.switchinput} type="checkbox" checked={inset ? true : false} onChange={()=> setInset(!inset)}/>
                                <span className={shadow.switchlabel} data-on="Inset" data-off="Outset"></span>
                                <span className={shadow.switchhandle}></span>
                            </label>
                        </div>
                        <div className="mt-4 mb-3">
                            <CopyTo
                                text={generateShadow()}
                                onCopy={() => setCopied(true)}

                            />
                        </div>
                    </div>
                    <div className={shadow.main + " col-lg-g col-md-8 col-sm-12"} style={{backgroundColor:`rgba(${ backgroundColor.r }, ${ backgroundColor.g }, ${ backgroundColor.b }, ${backgroundColor.a })`}}>
                        <div className= {shadow.shadowBox} style={{
                            backgroundColor:`rgba(${ boxColor.r }, ${ boxColor.g }, ${ boxColor.b }, ${boxColor.a })`,
                            boxShadow:` 
                  ${ inset ? 'inset' : ''} 
                  ${horizontalLength}px 
                  ${verticalLength}px 
                  ${blurRadius}px 
                  ${spreadRadius}px rgba(${ shadowColor.r }, ${ shadowColor.g }, ${ shadowColor.b }, ${shadowColor.a})`
                        }}>
                        </div>
                        <div>
                            <CodeContainer>
                                <Paragraph type={'-webkit-'} paragraphClass={shadow.text} inset={inset} horizontalLength={horizontalLength} verticalLength={verticalLength} blurRadius={blurRadius} spreadRadius={spreadRadius} shadowColor={shadowColor} />
                                <Paragraph type={'-moz-'} paragraphClass={shadow.text} inset={inset} horizontalLength={horizontalLength} verticalLength={verticalLength} blurRadius={blurRadius} spreadRadius={spreadRadius} shadowColor={shadowColor} />
                                <Paragraph type={''} paragraphClass={shadow.text} inset={inset} horizontalLength={horizontalLength} verticalLength={verticalLength} blurRadius={blurRadius} spreadRadius={spreadRadius} shadowColor={shadowColor} />
                            </CodeContainer>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
};

Shadow.getInitialProps = async ctx => {
    // const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    return {
        title: "Box Shadow Generator",
        description: "How Css Box Shadow Works?",
        link : "http://facebook.com"
    }
};


export default Shadow;




