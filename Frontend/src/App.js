import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedChartType, setSelectedChartType] = useState('line');

  const handleDrop = (acceptedFiles) => {
    // Handle the dropped files here (e.g., read file content, process data, etc.)
    console.log(acceptedFiles);
  };

  const handleChartTypeChange = (event) => {
    setSelectedChartType(event.target.value);
  };

  return (
    <div className="App">
      <div className="dropzone">
        <input type="file" onChange={(e) => handleDrop(e.target.files)} />
      </div>

      <div className="chart-selection">
        <label>Select Chart Type:</label>
        <select value={selectedChartType} onChange={handleChartTypeChange}>
          <option value="line">Line Chart</option>
          <option value="bar">Bar Chart</option>
          <option value="pie">Pie Chart</option>
        </select>
      </div>
    </div>
  );
};

export default App;
