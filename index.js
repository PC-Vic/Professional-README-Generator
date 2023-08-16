const inquire = require('inquirer');
const fs = require('fs');

const questions = ({ title, description, installation, usage, license, email, github }) =>
    `# ${title}

    ![Github license](https://img.shields.io/badge/License-${license}-green.svg)

    ## Table of Contents
    -[Description](#description)



    ## Description
    ${description}
    
    
    ## Installation
    ${installation}
    
    
    ## Usage
    ${usage}
    
    
    ## License
    
    This project is licensed under the terms of the ${license} 
    
    
    ## Contact Information
    
    If you have any questions or need assistance with this project, you can reach me through the following methods:
    
    - Email: ${email}
    - GitHub: ${github}`

    inquire
        .prompt([
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
                type: 'list',
                name: 'license',
                message: 'What license did you use?',
                choices: ['MIT', 'ISC', 'SIL', 'Unlicensed', 'EPL'],
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


.then((answers) => {
    const fileQuestions = questions(answers);
console.log(fileQuestions);
    fs.writeFile('readme.md', fileQuestions, (err) =>
    err ? console.log(err) : console.log('Successfully created readme.md!')
    );
});