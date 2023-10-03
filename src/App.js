import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step1And2 from './components/Step1And2';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedMeetingType, setSelectedMeetingType] = useState('');
  const [selectedDuration, setSelectedDuration] = useState(60);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('Paypal');


 
  const goToNextStep = () => setCurrentStep((prev) => prev + 1);
  const goToPreviousStep = () => setCurrentStep((prev) => prev - 1);
  const goToFirstStep = () => setCurrentStep(0);
    const steps = [
    <Step1And2 
      goToNextStep={goToNextStep} 
      selectedMeetingType={selectedMeetingType}
      setSelectedMeetingType={setSelectedMeetingType}
      selectedDuration={selectedDuration}
      setSelectedDuration={setSelectedDuration}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      selectedTime={selectedTime}
      setSelectedTime={setSelectedTime}
      selectedPayment = {selectedPayment}
      setSelectedPayment = {setSelectedPayment}
    />,
    <Step3 goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep}
      selectedMeetingType={selectedMeetingType}
      selectedDuration={selectedDuration}
      selectedDate={selectedDate}
      selectedTime={selectedTime}
      selectedPayment={selectedPayment}
    />,
    <Step4 goToPreviousStep={goToPreviousStep}
    goToFirstStep ={goToFirstStep}
    selectedDuration={selectedDuration}
    selectedDate={selectedDate}
    selectedTime={selectedTime}
/>
  ];

  return (
    <div className="d-flex align-items-center bg-light">
      <div className="container bg-white p-4 rounded shadow">
        {steps[currentStep]}
      </div>
    </div>
  );
}

export default App;