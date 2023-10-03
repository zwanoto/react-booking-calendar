import React, { useState } from 'react';
import BookingScreen from './BookingScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

function Step2({ goToNextStep, goToPreviousStep, selectedMeetingType, selectedDuration, selectedDate, setSelectedDate,selectedTime,setSelectedTime }) {
  
  
  return (
    <div className="step2-container">
      <BookingScreen 
        selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate} 
        selectedTime={selectedTime} 
        setSelectedTime={setSelectedTime}
        selectedDuration={selectedDuration}
      />
      <div className="navigation-buttons d-flex justify-content-center">
        <button 
          onClick={goToNextStep} 
          disabled={!selectedTime} // disable button if no payment method is selected
          className="btn btn-primary"
        >
          Termin buchen 
        </button>
      </div>
    </div>
  );
}

export default Step2;
