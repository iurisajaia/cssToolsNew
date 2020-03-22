import React, { useState , useEffect } from 'react'
import radius from '../assets/radius.module.css';
import Layout from '../components/layout'
import CopyTo from '../components/copyToClipboard';
import CodeContainer from '../components/codeContainer';
import Input from '../components/input';
import RadiusInput from '../components/radiusInput';

const Radius = ({title,description}) => {
    const [copied, setCopied] = useState(false)
    const [top,setTop] = useState(0);
    const [right, setRight] = useState(0);
    const [bottom, setBottom] = useState(0);
    const [left, setLeft] = useState(0);
    const [all, setAll] = useState(0);

    const setAllSides = (value) =>{
        setAll(value)
    };

    useEffect(() => {
        setTop(all);
        setRight(all);
        setBottom(all);
        setLeft(all);
    },[all]);


    return (
        <Layout>
            <div className={radius.radiusContainer + ' row'}>
                <div className={radius.rangePanel + ' col-lg-g col-md-4 col-sm-12'}>
                    <div className={radius.rangePanelContainer}>
                        {/* <div className={radius.rangeBox}>
                    <label className={radius.rangeLable}>All Conner</label>
                    <input value={all} name="all" onChange={setTop} type="range" className={radius.rangeInput}/>
                </div> */}
                        <Input
                            containerClassName={radius.rangeBox}
                            labelClassName={radius.rangeLable}
                            type={'range'}
                            label={'All Corner'}
                            value={all}
                            onInputChange={setAllSides}
                        />
                        <Input
                            containerClassName={radius.rangeBox}
                            labelClassName={radius.rangeLable}
                            type={'range'}
                            label={'Top'}
                            value={top}
                            onInputChange={setTop}
                        />
                        <Input
                            containerClassName={radius.rangeBox}
                            labelClassName={radius.rangeLable}
                            type={'range'}
                            label={'Right'}
                            value={right}
                            onInputChange={setRight}
                        />
                        <Input
                            containerClassName={radius.rangeBox}
                            labelClassName={radius.rangeLable}
                            type={'range'}
                            label={'Bottom'}
                            value={bottom}
                            onInputChange={setBottom}
                        />
                        <Input
                            containerClassName={radius.rangeBox}
                            labelClassName={radius.rangeLable}
                            type={'range'}
                            label={'Left'}
                            value={left}
                            onInputChange={setLeft}
                        />
                    </div>
                    <div>
                        <CodeContainer>
                            <span>border-radius: {top}% {right}% {bottom}% {left}%</span>
                            <span>-moz-border-radius: {top}% {right}% {bottom}% {left}%</span>
                            <span>-webkit-border-radius: {top}% {right}% {bottom}% {left}%</span>
                        </CodeContainer>
                    </div>
                    <div className={radius.cssResult}>

                        <CopyTo
                            text={
                                `border-radius: ${top}% ${right}% ${bottom}% ${left}%;
                        -moz-border-radius: ${top}% ${right}% ${bottom}% ${left}%;
                        -webkit-border-radius: ${top}% ${right}% ${bottom}% ${left}%;`
                            }
                            onCopy={() => setCopied(!copied)}
                        />
                    </div>
                </div>
                <div className={radius.resultBox  + ' col-lg-g col-md-8 col-sm-12'}>
                    <div className={radius.radiusBox}>
                        <RadiusInput
                            type={'range'}
                            label={'Top'}
                            id={radius.rangeOne}
                            inputClassName={radius.radiusInput}
                            value={top}
                            onInputChange={setTop}
                        />
                        <RadiusInput
                            type={'range'}
                            label={'Right'}
                            id={radius.rangeTwo}
                            inputClassName={radius.radiusInput}
                            value={right}
                            onInputChange={setRight}
                        />
                        <RadiusInput
                            type={'range'}
                            label={'Bottom'}
                            id={radius.rangeThree}
                            inputClassName={radius.radiusInput}
                            value={bottom}
                            onInputChange={setBottom}
                        />
                        <RadiusInput
                            type={'range'}
                            label={'Left'}
                            id={radius.rangeFour}
                            inputClassName={radius.radiusInput}
                            value={left}
                            onInputChange={setLeft}
                        />
                        <div className={radius.radiusCircle}
                             style={{
                                 borderTopLeftRadius : top+'%',
                                 borderTopRightRadius : right+'%',
                                 borderBottomRightRadius : bottom+'%',
                                 borderBottomLeftRadius : left+'%'
                             }}
                             id="radius-circle"></div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Radius;

