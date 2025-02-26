import React from 'react';
import WithoutDebounce from './WithoutDebounce';
import WithDebounce from './WithDebounce';

function DebounceConcept() {
  return (
    <div style={{ display: 'flex', justifyContent:'space-evenly' }}>
      <WithoutDebounce />
      <WithDebounce />
    </div>
  );
}

export default DebounceConcept;
