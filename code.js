// Import the 'figma' library and show the UI
figma.showUI(__html__);
figma.ui.resize(400, 300);

// Define the 'onmessage' event handler for receiving messages from the UI
figma.ui.onmessage = async msg => {
  const lines = msg.file.split('\r\n');
  const dataString = lines.slice(1); // Skip the first line (header)

  const students = [];

  for (let i = 0; i < dataString.length; i++) {
    const values = dataString[i].split(',');
    const studentObj = {};
    studentObj["data1"] = values[0];
    studentObj["data2"] = parseFloat(values[1]); // Parse the data as a number
    students.push(studentObj);
  }

  if (msg.type === 'fileUpload') {
    const sample_arr = students;
    const colors = [{ r: 1, g: 0, b: 0 }, { r: 0, g: 1, b: 0 }, { r: 0, g: 0, b: 1 }];
    const nodes = [];
    const rectWidth = 50;
    const spacing = 20;
    const graphBottomY = figma.viewport.center.y;

    await figma.loadFontAsync({ family: "Inter", style: "Regular" });

    // Plot Y-axis
    const yAxis = figma.createRectangle();
    yAxis.x = spacing - 5; // Adjust the position for better alignment
    yAxis.y = graphBottomY - 200; // Adjust the height of the Y-axis
    yAxis.resize(5, 200);
    yAxis.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
    figma.currentPage.appendChild(yAxis);
    nodes.push(yAxis);

    for (let i = 0; i < sample_arr.length; i++) {
      const rect = figma.createRectangle();
      rect.x = i * (rectWidth + spacing) + spacing;
      const barHeight = sample_arr[i].data2 * 2;
      rect.y = graphBottomY - barHeight;
      rect.resize(rectWidth, barHeight);
      rect.fills = [{ type: 'SOLID', color: colors[i % 3] }];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);

      const label = figma.createText();
      label.characters = sample_arr[i].data1;
      label.x = rect.x + rectWidth / 2 - label.width / 2;
      label.y = graphBottomY + 10;
      figma.currentPage.appendChild(label);
    }

    // Plot X-axis
    const xAxis = figma.createRectangle();
    xAxis.x = spacing - 5; // Adjust the position for better alignment
    xAxis.y = graphBottomY;
    xAxis.resize(sample_arr.length * (rectWidth + spacing) + spacing, 5);
    xAxis.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
    figma.currentPage.appendChild(xAxis);
    nodes.push(xAxis);

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  // Close the plugin after execution
  figma.closePlugin();
};
