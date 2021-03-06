import React, { Component } from 'react'
import CopyTo from '../components/copyToClipBoard'
import pretty from 'pretty'
import Layout from '../components/layout';

class HtmlFormater extends Component{

    state = {
        response : '',
        text : '',
        copied : false
    };

    formatHTML = () => {
        const { text } = this.state;

        const formated = pretty(text);

        this.setState( {
            response : formated
        })
    };

    render(){
        const { text, response } = this.state;
        const {title,description} = this.props;
        return (
            <Layout title={title} description={description}>
                <div className="row">
                    <div className="col-lg-g col-md-6 col-sm-12">
                        <div className="form-group">
                            <textarea className="form-control minify-textarea" placeholder="Paste HTML Here" onChange={e => this.setState({text : e.target.value})} value={text}> </textarea>
                        </div>
                    </div>
                    <div className="col-lg-g col-md-6 col-sm-12">
                        <textarea className="form-control minify-textarea" placeholder="Output" value={response} onChange={e => this.setState({response:e.target.value})}> </textarea>
                    </div>
                    <div className="mt-3 mb-3">
                        <button  className="btn mr-2" onClick={this.formatHTML}>Format</button>
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

export default HtmlFormater;
