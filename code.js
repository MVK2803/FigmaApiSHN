figma.showUI(__html__);

figma.ui.onmessage = msg => {
    if (msg.type === 'plot') {
    // Create a new rectangle for each value
    console.log(msg.values);
    msg.values.forEach((value, index) => {
        const rect = figma.createRectangle();
        
        // Set the height of the rectangle based on the value
        rect.resize(10, Number(value[1]));
        
        // Position the rectangle
        rect.x = index * 15;
        
        // Add the rectangle to the current page
        figma.currentPage.appendChild(rect);
    });

    // Close the plugin when we're done
    figma.closePlugin();
    }
};
  