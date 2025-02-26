import React from 'react';

// this below function is HOC / Wrapper / Layout/ Decorator
// Pure JS logic function
function throttle(callBackFn, delay) {
    let execute = false;
    return function (...args) {
        if (!execute) {
            execute = true
            callBackFn(...args)
            setTimeout(() => execute = false, delay)
        }
    }
}
function WithThrottling() {
    const handleMouseMove = e => {
        //everytime the mouse moved this function will be invoked
        console.log('api call to do some operations...')
    }
    window.addEventListener('mousemove', throttle(handleMouseMove, 1000))
    return (
        <div>
            <h3>With Throttling</h3>
            <p> Search  </p>
            <input type='text' />
        </div>
    );
}

export default WithThrottling;
