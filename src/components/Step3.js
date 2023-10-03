import React, { useState } from 'react';

function Step3({
  goToNextStep,
  goToPreviousStep,
  selectedMeetingType,
  selectedDuration,
  selectedDate,
  selectedTime,
  selectedPayment
}) {
  // State to hold selected payment method
  // It seems you don't utilize this state in the provided code snippet, but I'll keep it as you might need it.
  const [paymentMethod, setPaymentMethod] = useState('');

  // Function to format the date into German standard (DD.MM.YYYY)
  const formatDateToGerman = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('de-DE', options).format(date);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h4 className="mb-4">Zahlung</h4>

      <p className="mb-2">
        <strong>Art des Meetings:</strong> {selectedMeetingType}
      </p>
      <p className="mb-2">
        <strong>Dauer:</strong> {selectedDuration} Minuten
      </p>
      <p className="mb-2">
        <strong>Ausgewählte Uhrzeit:</strong> {selectedTime}
      </p>
      <p className="mb-2">
        <strong>Ausgewähltes Datum:</strong> {formatDateToGerman(selectedDate)}
      </p>
      <p className="mb-4">
        <strong>Zahlungsmethode:</strong> {selectedPayment}
      </p>


      {/* Navigation buttons */}
      <div className="d-flex justify-content-center m-5 w-50">
        <button
          onClick={goToPreviousStep}
          className="btn btn-outline-primary"
        >
          Zurück
        </button>
        <button
          onClick={goToNextStep}
          className="btn btn-primary ms-3" // added margin for spacing
        >
          Jetzt bezahlen
        </button>
      </div>
    </div>
  );
}

export default Step3;
