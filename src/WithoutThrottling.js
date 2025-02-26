import React from 'react';

function WithoutThrottling() {
    const handleMouseMove = e => {
        //everytime the mouse moved this function will be invoked
        console.log('api call to do some operations...')
    }
    window.addEventListener('mousemove',handleMouseMove)
    return (
        <div>
            <h3>Without Throttling</h3>
            <p> Search  </p>
            <input type='text'/>
        </div>
    );
}

export default WithoutThrottling;
