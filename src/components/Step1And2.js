// Step1And2.js

import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';

const Step1And2 = (props) => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between">
      <div className="w-100 w-md-50 pr-md-2 mb-2 mb-md-0">
        <Step1 {...props} />
      </div>
      <div className="w-100 w-md-50 pl-md-2">
        <Step2 {...props} />
      </div>
    </div>
  );
};

export default Step1And2;
