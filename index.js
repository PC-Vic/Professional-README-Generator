// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ({ title, description, installation, usage, license, badges, email, github }) =>
    `# ${title}

    ## Description
    ${description}
    
    
    ## Installation
    ${installation}
    
    
    ## Usage
    ${usage}
    
    
    ## License
    
    This project is licensed under the terms of the ${license}.
    
    ## Badges
    ${badges}
    
    
    ## Contact Information
    
    If you have any questions or need assistance with this project, you can reach me through the following methods:
    
    - Email: ${email}
    - GitHub: ${github}`

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
