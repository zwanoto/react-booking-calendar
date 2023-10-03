import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PaymentSelector({ onSelect, selectedPaymentType }) {
    const meetingTypes = ['Paypal', 'Kreditkarte','spaeter bezahlen'];
  
    const handleChange = (event) => {
      onSelect(event.target.value);
    };
  
    return (
      <div className="mb-3">
        <select 
          onChange={handleChange} 
          value={selectedPaymentType}
          className="form-select"
        >
          {meetingTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    );
  }
  

export default PaymentSelector;
