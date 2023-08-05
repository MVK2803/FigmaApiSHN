const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('fileInput');
const chartTypeSelect = document.getElementById('chartTypeSelect');

fileInput.addEventListener('change', (e) => {
  handleDrop(e.target.files);
});

chartTypeSelect.addEventListener('change', (e) => {
  handleChartTypeChange(e.target.value);
});

function handleDrop(acceptedFiles) {
  // Handle the dropped files here (e.g., read file content, process data, etc.)
  console.log(acceptedFiles);
}

function handleChartTypeChange(value) {
  // Handle the chart type change here
  console.log(value);
}
