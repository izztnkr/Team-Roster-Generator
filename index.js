const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Include packages needed for this application
//install inquirer

// const Choices = require("inquirer/lib/objects/choices");

//-----INPUT or QUESTIONS-----// tell computer to use inquirer to ask a set of questions and recieve answers
const questions = [
  {
    type: "input",
    name: "team_Name",
    message: "What is your team's name?",
  },
  {
    type: "input",
    name: "manager_Name",
    message: "What's the manager's first and last name?",
  },
  {
    type: "input",
    name: "email_Me",
    message: "What is the email to reach you at?",
  },
  {
    type: "input",
    name: "git_Hub",
    message: "What is your GitHub username?",
  },
  // {
  //   type: "input",
  //   name: "project_Description",
  //   message: "What is your project about? Provide a description.",
  // },
  // {
  //   type: "input",
  //   name: "project_Installation",
  //   message:
  //     "How does one install your project? Provide a description or useful information.",
  // },
  // {
  //   type: "input",
  //   name: "project_Usage",
  //   message: "How do you use your project? Provide a description or example",
  // },
  // {
  //   type: "input",
  //   name: "project_Contributing",
  //   message:
  //     "Are there any contribution guidelines which the user should know?",
  // },
  // {
  //   type: "input",
  //   name: "project_Tests",
  //   message: "Are there any test instructions? Provide a step by step message.",
  // },
  // {
  //   type: "input",
  //   name: "project_Questions",
  //   message: "Is there any additional contact info the user should know?",
  // },
  // {
  //   type: "list",
  //   name: "badge",
  //   message: "Which license did you use?",
  //   choices: ["CC Creative Commons License", "MIT License", "WTFPL License"],
  // },
];

// function badge_Choice(answers) {
//   if (answers.badge === "CC Creative Commons License") {
//     return {
//       badge_Copy: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
//       badge_MD:
//         "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
//     };

//     //  block of code to be executed if condition1 is true
//   } else if (answers.badge === "MIT License") {
//     return {
//       badge_Copy:
//         "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. ",
//       badge_MD:
//         "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
//     }; //  block of code to be executed if the condition1 is false and condition2 is true
//   } else if (answers.badge === "WTFPL License") {
//     return {
//       badge_Copy:
//         "DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE Version 2, December 2004 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> Everyone is permitted to copy and distribute verbatim or modified copies of this license document, and changing it is allowed as long as the name is changed. DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 0. You just DO WHAT THE FUCK YOU WANT TO.",
//       badge_MD:
//         "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
//     }; //  block of code to be executed if the condition1 is false and condition2 is false
//   }
// }

//create an object to hold the badge copy & badge MD choices so that you can call them outside of the badge_Choice function//

//-----STRING or TEMPLATE LITERAL-----// place the answers somewhere & tell computer to display answers
inquirer.prompt(questions).then((answers) => {
  const { name } = answers;
  console.log(answers);

  // let licenseChoice = badge_Choice(answers);
  // console.log(licenseChoice);

  //-----FILE MARKDOWN STYLING-----//
  const generateHTMLStyling = (answers) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>

    
      
    </body>
    </html>
    <h1>${answers.project_Title} </h1>
---

Questions
Do you have questions? Here's how to contact me. 

<a href = "mailto: ${answers.email_Me}">${answers.full_Name}'s email</a>

<a href= "https://github.com/${answers.git_Hub}">${answers.full_Name}'s GitHub </a>

  `;
  };
  //-----FILE or WRITE FILE-----// ie tell the computer to write a file
  fs.writeFile("./index.html", generateHTMLStyling(answers), (err) => {
    if (err) throw err;
    console.log("Generator complete. You can check for your webpage file now!");
  });
});
