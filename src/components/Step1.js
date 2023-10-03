import React, { useState } from 'react';
import MeetingSelector from './MeetingSelector';
import DurationSelector from './DurationSelector';
import PaymentSelector from './PaymentSelector';
function Step1({ 
  goToNextStep, 
  setSelectedMeetingType, 
  selectedMeetingType, 
  selectedDuration, 
  setSelectedDuration, 
  selectedPayment,
  setSelectedPayment
}) {

  const handleSelectMeeting = (selectedType) => {
    setSelectedMeetingType(selectedType);
  };

  const handleDurationSelect = (selectedDuration) => {
    setSelectedDuration(selectedDuration);
  };

  const handlePaymentSelect = (selectedPayment) => {
    setSelectedPayment(selectedPayment);
  };

  const handleNext = () => {
    console.log(`Selected meeting type: ${selectedMeetingType}`);
    goToNextStep();
  };
  const baseprice = selectedDuration * 1.5 * 94 / 90 * Math.pow(0.95, (selectedDuration / 60));
  const price = selectedPayment === 'Paypal' ? baseprice : baseprice * 1.10;
  
  return (
    <div className="d-flex flex-column align-items-center">
      <h4 className='mt-5'>Terminauswahl</h4>
      <MeetingSelector 
        onSelect={handleSelectMeeting}
        selectedDuration={selectedDuration}
        setSelectedDuration={setSelectedDuration} 
      />
      <h4>Termindauer:</h4>
      <DurationSelector 
        onSelect={handleDurationSelect} 
        selectedDuration={selectedDuration} 
      />
      <h4> Zahlungsmethode</h4>
      <PaymentSelector
       onSelect={handlePaymentSelect}
       selectedPayment = {selectedPayment}
       />
             <h4 className='mt-3'>Preis: {price.toFixed(0)}.00 Euro</h4> {/* Show calculated price here */}

    </div>
  );
}

export default Step1;
