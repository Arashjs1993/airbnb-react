# src/Components folder
Contains all the react components in this template.

# public/images
Contains the images used in this template.

# src/index.css
Contains the Cascading Style Stylesheet related to this template.

# App.js
Contains the file that imports the Components and creates the skeleton of this template. Each card component gets the value of its elements dynamicaly from the objects array in the Data.js, this is done by the "map" function that has an inner loop that performs the function we push to it.

# index.js
Imports the App.js file and using the render method of the ReactDOM it renders JSX that is inside the App.js on our browser.

# public/index.html
Contains one div element with class="root" in which the render method in the "index.js" file renders the reat components we have in this template. 

# Data.js
Contains an object with several properties that is used as the data for the "Card" component to simulate a dynamic website.
