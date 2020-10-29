# Mendix app testing 🧪
Automated client-side testing using [Cypress JS](https://www.cypress.io/).

## How to setup 💾
This repository is used to create/manage/run automated test in Cypress for Mendix applications.   

 1. To start, you need to **Git clone** this repository into your local environment.
 2. Once done, you need to **download** and **install** 
 [Node.js](https://nodejs.org/en/download/) LTS (Long term support).
 3. After Node is installed, you need to **download all** the Node dependencies to your 
 local copy of the repository. This is done by opening a command line, navigating 
 to the cloned repository file, and **running the command...**
 ```bash
 npm install
 ```
 4. Now you have the dependencies downloaded, you can open the 
 Cypress interface by **running the command...**
 ```bash
 npm run cypress open
 ```

## How to use effectively 📕

### Controlling environments/users 🌎
All test constants are stored in the ``cypress.env.json`` file. 
The general layout should be as shown below...
```json
{
  "host": <url>,
  "user": {
    <username>: <password>
  }
}
```

### Folder structure 📁
All Cypress tests and other custom written files are contained in the ```./Cypress/``` directory.
 - ```./Cypress/fixtures/``` contains all the test files. For this template, we don't currently require 
 any testing assets
 - ```./Cypress/integration/```contains all the test scripts. For this template, I have stored 
 all the Mendix tests in ```./Cypress/integration/mendix```.
 - ```./Cypress/plugins/``` contains all the Node package imports. For this template, I don't depend on 
 any other packages therefore, it's empty.
 - ```./Cypress/support/``` contains all the custom written commands. For this template, I have created 
 three methods. ```cy.login(<appName>, <username>)```, ```cy.goto(<appName>)``` and ```cy.logout(<appName>)```, 
 which example usage can be found [here](cypress/integration/mendix/Operations%20app/routes.spec.js).

### Useful resources 📖
There are plenty of easy to use documentation for Cypress on their page 
[here](https://docs.cypress.io/api/api/table-of-contents.html).   
   
Also, there are *Getting started* guides, that lead you step-by-step on 
creating and understanding how tests work, which you can find 
[here](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file).   
