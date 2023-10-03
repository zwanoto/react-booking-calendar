import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

function BookingScreen({ selectedDate, setSelectedDate, selectedTime, setSelectedTime,selectedDuration})  {
    const isDateInThePast = ({ date }) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set time to midnight to only compare the date part
      return date < today;
  };

  const [times, setTimes] = useState([]);

  const [bookedTimes, setBookedTimes] = useState([]);
    const allTimes = [];
    for (let i = 14; i <= 20; i++) {
      allTimes.push(`${i}:00`);
      if (i < 20) allTimes.push(`${i}:30`);
    }
    const isTimeBooked = (time, bookedRanges) => {
      const [hours, minutes] = time.split(':').map(Number);
      const timeInMinutes = hours * 60 + minutes;
      const endTimeInMinutes = timeInMinutes + selectedDuration;
  
      for (const range of bookedRanges) {
          // Check if the proposed meeting's start is within a booked range
          const startsDuring = timeInMinutes >= range.start && timeInMinutes < range.end;
          // Check if the proposed meeting's end is within a booked range
          const endsDuring = endTimeInMinutes > range.start && endTimeInMinutes <= range.end;
          // Check if the proposed meeting encapsulates a booked range
          const encapsulates = timeInMinutes <= range.start && endTimeInMinutes >= range.end;
  
          if (startsDuring || endsDuring || encapsulates) {
              return true;
          }
      }
      return false;
  
};
useEffect(() => {
    axios.get(`http://localhost:3000/meetings?date=${selectedDate.toISOString().split('T')[0]}`)
    .then(response => {
        const bookedRanges = response.data.map(meeting => ({
            start: new Date(meeting.start_time).getHours() * 60 + new Date(meeting.start_time).getMinutes(),
            end: new Date(meeting.end_time).getHours() * 60 + new Date(meeting.end_time).getMinutes()
        }));
        console.log(bookedRanges)
        const availableTimes = allTimes.filter(time => !isTimeBooked(time, bookedRanges));
        setTimes(availableTimes);
        console.log(availableTimes)
      })
        .catch(error => console.error('Error fetching booked times:', error));
  }, [selectedDate,selectedDuration]);

  // Filter out the booked times
  return (
    <div className="container m-auto p-4">
      <div className="calendar d-flex justify-content-center mb-4">
    <Calendar
      onChange={setSelectedDate}
      value={selectedDate}
      tileDisabled={isDateInThePast}
    />
  </div>
      <div className="mt-4">
        {times.length > 0 ? (
          <div className="my-4">
    <label 
      htmlFor="timeSelect" 
      className="d-flex justify-content-center block text-sm font-medium text-gray-700 mb-2"
    >
      Uhrzeit:
    </label>
    <div className="d-flex flex-wrap justify-content-center">
  {times.map((time) => (
    <button
      key={time}
      onClick={() => setSelectedTime(time)}
      className={`btn ${selectedTime === time ? 'btn-primary' : 'btn-outline-primary'} m-2`}
    >
      {time}
    </button>
  ))}      
</div>

 
  </div>
  
      
        ) : (
          <p className="d-flex justify-content-center text-red-500">An diesem Tag sind leider keine Termine mehr verfügbar.</p>
        )}
      </div>
  
    </div>
  );
  
}

export default BookingScreen;