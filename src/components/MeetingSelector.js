import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MeetingSelector({ onSelect, selectedMeetingType }) {
    const meetingTypes = ['Statistik Nachhilfe', 'Statistik-Beratung'];
  
    const handleChange = (event) => {
      onSelect(event.target.value);
    };
  
    return (
      <div className="mb-3">
        <select 
          onChange={handleChange} 
          value={selectedMeetingType}
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
  

export default MeetingSelector;
