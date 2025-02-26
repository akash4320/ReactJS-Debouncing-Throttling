import React from 'react';

// this below function is HOC / Wrapper / Layout/ Decorator
// Pure JS logic function
function debounce(callBackFn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => callBackFn(...args), delay)
    }
}

function WithDebounce() {
    const handleChange = (e) => {
        console.log('api call...')
    }
    return (
        <div>
            <h3>With Debounce</h3>
            <p> Search  </p>
            <input type='text' onChange={debounce(handleChange, 1000)} />
        </div>
    );
}

export default WithDebounce;
