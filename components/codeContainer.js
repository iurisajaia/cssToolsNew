import React from 'react';

const CodeContainer = ({children}) =>{
    return <div>
        {children}
        <style jsx>
            {`
                  display:flex;
                  flex-direction:column;
                  justify-content:flex-start;
                  background:#eceeef;
                  width:100%;
                  max-width:400px;
                  overflow:auto;
                  font-size:12px;
                  line-height:15px;
                  height:70px;
                  border: 1px solid #666;
                  border-radius: 4px;
                  padding: 10px 10px;
                  margin-top:25px;
                  margin-bottom:20px;
              `}
        </style>
    </div>
};

export default CodeContainer;
