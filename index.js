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

    inquire
        .createPromptModule([
            {
                type: 'input',
                name: 'title',
                message: 'What is the name of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a description explaining the what, why and how of your project?',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What steps are required to install this project?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide instructions and examples for use?',
            },
            {
                type: 'input',
                name: 'license',
                message: 'What license did you use?',
            },
            {
                type: 'input',
                name: 'badges',
                message: 'Do you have any badges?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your github link?',
            },
        ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
