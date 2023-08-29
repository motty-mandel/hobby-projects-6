// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({name, describe, install, howToUse, link, credits, license, username, email}) =>
`# ${name}

## Description
${describe}

## Installation
${install}

## Usage
${howToUse}
[link to the repo](${link})

## Credits
${credits}

## License
${license}

## Questions
Feel free to ask questions to - ${username},
as well as ${email}
`;

// TODO: Create an array of questions for user input
inquirer
    .prompt([
{
    type: 'input',
    message: 'What is the name of your repo?',
    name: 'name',
},
{
    type: 'input',
    message: 'Describe your repo.',
    name: 'describe',
},
{
    type: 'input',
    message: 'How is the app installed?',
    name: 'install'
},
{
    type: 'input',
    message: 'What can your repo be used for?',
    name: 'howToUse',
},
{
    type: 'input',
    message: 'If you can, please add a link to the repo.',
    name: 'link',
},
{
    type: 'input',
    message: 'Who would you like to credit with helping build your repo?',
    name: 'credits',
},
{
    type: 'list',
    message: 'Which license did you use for your repo?',
    name: 'license',
    choices: ['MIT', 'Apache License 2.0', 'GPL 3.0', 'BSD 3'],
},
{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
}
    ])
    .then((data) => {
        const readmeAns = generateReadme(data);
    

// TODO: Create a function to write README file
fs.writeFile('README.md', readmeAns, (err) => 
err ? console.log(err) : console.log('Success!')
);
})
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
