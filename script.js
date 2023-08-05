document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.querySelector('.dropzone');
  const fileInput = document.getElementById('fileInput');
  const chartTypeSelect = document.getElementById('chartType');
  const runButton = document.getElementById('runButton');

  dropzone.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', handleDrop);

  chartTypeSelect.addEventListener('change', handleChartTypeChange);

  runButton.addEventListener('click', () => {
    runButton.innerText = 'Generating';
    // Simulate generating process (you can replace this with your actual logic)
    setTimeout(() => {
      runButton.innerText = 'Run';
    }, 2000); // Change back to "Run" after 2 seconds (adjust as needed)
  });

  function handleDrop(event) {
    const acceptedFiles = event.target.files;
    // Handle the dropped files here (e.g., read file content, process data, etc.)
    console.log(acceptedFiles);
  }

  function handleChartTypeChange(event) {
    const selectedChartType = event.target.value;
    // Handle the chart type change here
    console.log(selectedChartType);
  }
});
