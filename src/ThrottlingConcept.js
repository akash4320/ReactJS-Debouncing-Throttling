import React from 'react';
import WithoutThrottling from './WithoutThrottling';
import WithThrottling from './WithThrottling';


function ThrottlingConcept() {
  return (
    <div style={{ display: 'flex', justifyContent:'space-evenly' }}>
      {/* <WithoutThrottling /> */}
      <WithThrottling />
    </div>
  );
}

export default ThrottlingConcept;
