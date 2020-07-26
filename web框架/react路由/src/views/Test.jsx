import React from 'react';

function Test(props) {
    console.log(props.location, props.match);
    
    return <>
        传参测试
    </>;
}

export default Test;