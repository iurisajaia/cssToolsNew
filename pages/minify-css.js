import React, { Component } from 'react'
import CopyTo from '../components/CopyToClipBoard';
import Layout from '../components/layout';

class MinifyCss extends Component{
    state = {
        text : '',
        response : '',
        copied : false
    };

    minifyCss = () => {

        const { text } = this.state;

        const response = text.replace(/\/\*.*\*\/|\/\*[\s\S]*?\*\/|\n|\t|\v|\s{2,}/g,'')
            .replace(/\s*\{\s*/g,'{')
            .replace(/\s*\}\s*/g,'}')
            .replace(/\s*\:\s*/g,':')
            .replace(/\s*\;\s*/g,';')
            .replace(/\s*\,\s*/g,',')
            .replace(/\s*\~\s*/g,'~')
            .replace(/\s*\>\s*/g,'>')
            .replace(/\s*\+\s*/g,'+')
            .replace(/\s*\!\s*/g,'!');

        this.setState({
            response
        })
    };

    render(){
        const { text , response } = this.state;
        const {title, description} = this.props;
        return (
            <Layout title={title} description={description}>
                <div className="row">
                    <div className="col-lg-g col-md-6 col-sm-12">
                        <div className="form-group">
                            <textarea className="form-control minify-textarea" placeholder="Paste CSS Here" onChange={e => this.setState({text : e.target.value})} value={text}> </textarea>
                        </div>
                    </div>
                    <div className="col-lg-g col-md-6 col-sm-12">
                        <textarea className="form-control minify-textarea" placeholder="Output" value={response} onChange={e => this.setState({response:e.target.value})}> </textarea>
                    </div>
                    <div className="mt-3 mb-3">
                        <button  className="btn mr-2" onClick={this.minifyCss}>Minify</button>
                        <CopyTo
                            text={response}
                            onCopy={() => this.setState({copied: true})}

                        />
                    </div>
                </div>
                <style jsx>
                    {`
        textarea{
            resize:none;
        }
        `}
                </style>
            </Layout>
        )
    }
}

export default MinifyCss;
