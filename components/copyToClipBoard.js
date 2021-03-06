import React , { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { CopySvg , TickSvg } from '../public/clipboard';

 function CopyTo(props){
    const { text , onCopy } = props;

    const [ alert , setAlert ] = useState(false);

    const onPress = () => {
        onCopy();
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 2000)
    };

    return (
         <CopyToClipboard text={text} onCopy={onPress}>
            <span className="btn copy-btn">{alert ? <TickSvg/> : <CopySvg/>} {alert ? 'Copied' : 'Copy to clipboard'}</span>
         </CopyToClipboard>
    )
}

export default CopyTo;
{/*<span className="btn copy-btn">{alert ? <TickSvg/> : <CopySvg/>} {alert ? 'Copied' : 'Copy to clipboard'}</span>*/}
