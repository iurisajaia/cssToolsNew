import React, { useState } from 'react';
import LinearGradient from '../components/linear';
import RadialGradient from '../components/radial';
import Layout from '../components/layout';

const Gradient = ({title,description}) => {
    const [tab,setTab] = useState('linear');
    return (
        <Layout  title={title} description={description}>
            <div  className="d-flex justify-content-center">
                <div className="btn-group btn-group-toggle" data-toggle="buttons" onChange = {e => setTab(e.target.value)}>
                    <label className={tab==='linear' ? 'btn btn-active' : 'btn btn-inactive'}>
                        <input type="radio" value="linear" name="options" id="linear" autoComplete="off"/>
                        Linear
                    </label>
                    <label className={tab==='radial' ? 'btn btn-active' : 'btn btn-inactive'}>
                        <input type="radio" value="radial" name="options" id="radial" autoComplete="off"/>
                        Radial
                    </label>
                </div>
            </div>
            {tab === 'linear' && <LinearGradient/>}
            {tab === 'radial' && <RadialGradient/>}
            <style jsx>
                {`
        .btn-inactive{
          background-color:#545b62;
        }
        .btn-active{
          background-color:#304CFD;
        }
        `}
            </style>
        </Layout>
    )
};

export default Gradient;
