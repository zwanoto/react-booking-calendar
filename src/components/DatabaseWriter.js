import React, { useEffect, useState } from 'react';
import axios from 'axios';  // Ensure axios is imported

function DatabaseWriter({
  selectedMeetingType,
  selectedDuration,
  selectedDate,
  selectedTime,
  selectedPayment
}) {
  const [isDataWritten, setIsDataWritten] = useState(false);

  useEffect(() => {
    const writeDataToDatabase = async () => {
      try {
        // Combine selectedDate and selectedTime to create startTime
        const startTime = new Date(`${selectedDate.toISOString().split('T')[0]}T${selectedTime}`);
        
        // Ensure startTime is valid
        if (isNaN(startTime.getTime())) {
          throw new Error('Invalid startTime');
        }
        
        // Calculate endTime by adding selectedDuration
        const endTime = new Date(startTime.getTime() + selectedDuration * 60000);  // converting minutes to milliseconds

        // Ensure endTime is valid
        if (isNaN(endTime.getTime())) {
          throw new Error('Invalid endTime');
        }
        
        // Create payload
        const payload = {
          start_time: startTime.toISOString(),
          end_time: endTime.toISOString(),
        };

        // Posting data to the server
        const response = await axios.post('http://localhost:3000/meetings', payload);
        console.log('Data written to database: ', response.data);
      } catch (error) {
        console.error('Error writing data to database: ', error);
      }
    };
    if (!isDataWritten) {
      writeDataToDatabase();
      setIsDataWritten(true);  // Set flag to prevent future writes on re-renders
    }

    // Invoking the function to send data to the server
  }, [selectedMeetingType, selectedDuration, selectedDate, selectedTime, selectedPayment]);

  return (
    <p>Data being written to database...</p>
  );
}

export default DatabaseWriter;
