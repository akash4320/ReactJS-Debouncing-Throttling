import React from 'react';

function WithoutDebounce() {
    const handleChange = (e) => {
        console.log('api call...')
    }
    return (
        <div>
            <h3>Without Debounce</h3>
            <p> Search  </p>
            <input type='text' onChange={handleChange} />
        </div>
    );
}

export default WithoutDebounce;
