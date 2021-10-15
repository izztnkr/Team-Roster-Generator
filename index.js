const fs = require("fs");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");

//-----INPUT or QUESTIONS-----// tell computer to use inquirer to ask a set of questions and recieve answers
//set of questions to obtain Manager information.//
const questionsEmployee = [
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
    name: "email_Manager",
    message: "What is the Manager's email?",
  },
  {
    type: "input",
    name: "office_Number",
    message: "What is your office number?",
  },
  {
    type: "input",
    name: "manager_Employee_Number",
    message: "What is the Manager's employee number?",
  },
];
const optionQuestion = [
  {
    type: "list",
    name: "employee_Option",
    message: "What would you like to do next? (use arrow key)",
    choices: [
      "create Engineer profile",
      "create Intern profile",
      "Generate Team Roster Webpage",
    ],
  },
];
//set of questions to obtain Engineer information.//
const questionsEngineer = [
  {
    type: "input",
    name: "engineer_Name",
    message: "What's the Engineer's first and last name?",
  },
  {
    type: "input",
    name: "engineer_Email",
    message: "What is the Engineer's email?",
  },
  {
    type: "input",
    name: "engineer_GitHub",
    message: "What is the Engineer's GitHub name?",
  },
  {
    type: "input",
    name: "engineer_Employee_Number",
    message: "What is the engineer's employee number?",
  },
];
//set of questions to obtain Intern information.//
const questionsIntern = [
  {
    type: "input",
    name: "intern_Name",
    message: "What's the intern's first and last name?",
  },
  {
    type: "input",
    name: "intern_Email",
    message: "What is the Intern's email?",
  },
  {
    type: "input",
    name: "intern_GitHub",
    message: "What is the Intern's GitHub name?",
  },
  {
    type: "input",
    name: "intern_Employee_Number",
    message: "What is the Intern's employee number?",
  },
];

//function to check route next set of questions depending on user answer to intern vs employee//
function employee_option_Choice(answers) {
  if (answers.employee_Option === "create Engineer profile") {
    //  block of code to be executed if condition1 is true
    console.log("they chose engineer");
    inquirer.prompt(questionsEngineer).then((answers) => {
      const { name } = answers;
      console.log(answers);
      inquirer.prompt(optionQuestion).then((answers) => {
        const { name } = answers;
        console.log(answers);
        return {
          answers,
        };
        let managerChoice = employee_option_Choice(answers);
      });
    });
  } else if (answers.employee_Option === "create Intern profile") {
    //  block of code to be executed if condition2 is true
    console.log("they chose intern option");
    inquirer.prompt(questionsIntern).then((answers) => {
      const { name } = answers;
      console.log(answers);
      inquirer.prompt(optionQuestion).then((answers) => {
        const { name } = answers;
        console.log(answers);
        let managerChoice = employee_option_Choice(answers);
      });
    });
  } else if (answers.employee_Option === "Generate Team Roster Webpage") {
    //  block of code to be executed if condition3 is true
    //-----FILE or WRITE FILE-----// ie tell the computer to write a file
    fs.writeFile("./TeamRoster.html", generateHTMLStyling(answers), (err) => {
      if (err) throw err;
      console.log(
        "Generator complete. You can check for your webpage file now!"
      );
    });
  }
}
//create an object to hold the badge copy & badge MD choices so that you can call them outside of the badge_Choice function//

//-----FILE HTML STYLING & INTERPOLATE ANSWERS-----//
const generateHTMLStyling = (answers) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
      />
      <title>Team Roster</title>
    </head>
    <body>
      <section class="hero">
        <div class="hero-body">
          <p class="title">Team ${answers.team_Name}</p>
        </div>
      </section>
      <section class="section">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="card is-child">
              <header class="card-header has-background-success">
                <p class="card-header-title"></p>
                <div class="media-content">
                  <p class="title is-4">${answers.manager_Name}</p>
                  <p class="subtitle is-5">Manager</p>
                </div>
              </header>
              <div class="card-content has-background-grey-lighter">
                <div class="content has-background-white">
                  <p>ID: ${answers.manager_Employee_Number}</p>
                </div>
                <div class="content has-background-white">
                  <a href="mailto: ${answers.email_Manager}"
                    >Email: ${answers.email_Manager}</a
                  >
                </div>
                <div class="content has-background-white">
                  <p>Office Number: ${answers.office_Number}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="card is-child">
              <header class="card-header has-background-success">
                <p class="card-header-title"></p>
                <div class="media-content">
                  <p class="title is-4">${answers.engineer_Name}</p>
                  <p class="subtitle is-5">Engineer</p>
                </div>
              </header>
              <div class="card-content has-background-grey-lighter">
                <div class="content has-background-white">
                  <p>ID: ${answers.engineer_employee_Number}</p>
                </div>
                <div class="content has-background-white">
                  <a href="mailto: ${answers.engineer_Email}"
                    >Email: ${answers.engineer_Email}</a
                  >
                </div>
                <div class="content has-background-white">
                  <a href="https://github.com/${answers.engineer_GitHub}"
                    >${answers.engineer_GitHub}</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="card is-child">
              <header class="card-header has-background-success">
                <p class="card-header-title"></p>
                <div class="media-content">
                  <p class="title is-4">${answers.intern_Name}</p>
                  <p class="subtitle is-5">Intern</p>
                </div>
              </header>
              <div class="card-content has-background-grey-lighter">
                <div class="content has-background-white">
                  <p>ID: ${answers.intern_Employee_Number}</p>
                </div>
                <div class="content has-background-white">
                  <a href="mailto: ${answers.intern_Email}"
                    >Email: ${answers.intern_Email}</a
                  >
                </div>
                <div class="content has-background-white">
                  <a href="https://github.com/${answers.intern_GitHub}"
                    >${answers.intern_GitHub}</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  </html>

`;
};

//-----STRING or TEMPLATE LITERAL-----// place the answers somewhere & call the check for last question

inquirer.prompt(questionsEmployee).then((answers) => {
  const { name } = answers;
  console.log(answers);
  // let managerChoice = employee_option_Choice(answers);
  inquirer.prompt(optionQuestion).then((answers) => {
    const { name } = answers;
    console.log(answers);
    let managerChoice = employee_option_Choice(answers);
  });
});
