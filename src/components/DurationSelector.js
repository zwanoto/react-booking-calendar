function DurationSelector({ onSelect, selectedDuration }) {
    const durations = [
        { value: 15, label: '15 min' },

        { value: 30, label: '30 min' },
        { value: 45, label: '45 min' },
        { value: 60, label: '60 min' },  // This should be selected by default
        { value: 90, label: '90 min' },
        { value: 120, label: '2h' },
        { value: 150, label: '2.5h' },
        { value: 180, label: '3h' },

    ];
  
    const handleChange = (event) => {
        onSelect(Number(event.target.value));
    };
  
    return (
        <div className="">
            <select
                className="form-select"
                onChange={handleChange}
                value={selectedDuration}  // This controls the selected option
            >
                {durations.map((duration) => (
                    <option key={duration.value} value={duration.value}>
                        {duration.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DurationSelector;
