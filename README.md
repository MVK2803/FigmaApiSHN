![Plasmo Notion](https://github.com/TH-Activities/saturday-hack-night-template/assets/64391274/85d3fbb8-aed6-4751-b051-4539df392f1a)


# Sheet Plotter
A figma plugin to convert spreadsheet data into graphs and charts.
## Team members
1. [Mathew V Kariath](https://github.com/MVK2803)
2. [Rajath Thomas Kurian](https://github.com/rajath-tk)
3. [Abhishek S](https://github.com/abhi-s-03)
## Link to product walkthrough
([Link Here](https://drive.google.com/file/d/17WZ1OokSwRW9P3bSKqHhiL0pQkvTnqB6/view?usp=sharing))
## How it Works ?
The plugin allows users to upload a file and select a chart type from a dropdown menu. When the user clicks the "Run" button, it reads the uploaded file's content and the selected chart type using JavaScript. Then, it sends this data to a parent frame and generate the requested chart based on the uploaded file's data and the selected chart type is displayed in figma.
## Libraries used
Figma API
## How to configure
1.Ensure the system has latest versions of node.js.

2.Install typescript using following command

``````
npm install -g typescript
``````

3. in the directory of your plugin, get the latest type definitions for the plugin API by running:
``````
npm install --save-dev @figma/plugin-typings
``````
## How to Run
Open the plugin in Figma.Upload the file and choose the plot type.Click run
