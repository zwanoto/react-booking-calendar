import React from 'react';
import DatabaseWriter from './DatabaseWriter';

function Step4({
  goToPreviousStep,
  selectedDate,
  selectedDuration,
  selectedTime,
  goToFirstStep
}) {
  return (
    <div>
      <h2>Vielen Dank für Ihre Buchung.</h2>
      <DatabaseWriter
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        selectedDuration={selectedDuration}
      />
        <button
          onClick={goToFirstStep}
          className="btn btn-primary ms-3" // added margin for spacing
        >Zum Anfang</button>
    </div>
    
  );
}

export default Step4;
