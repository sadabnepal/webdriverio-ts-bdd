# WDIO6_TypeScript_BDD
This is a sample project that uses WebdriverIO and TypeScript. This project is useful not only as an example of WebdriverIO and TypeScript playing nicely together, but it includes examples of the PageObject pattern and some practical examples for using WebdriverIO to build an automated test suite with Cucumber & Chai.

## Getting Started
```
1. git clone https://github.com/sadabnepal/WDIO6_TypeScript_BDD.git
2. Navigate to `WDIO6_TypeScript_BDD`
3. In the terminal, Perform "npm i" to install all the dependencies present in the package.json file.
4. In the terminal, perform `npm run test` to start the script execution
5. In the terminal, perform `npm run report` to start the script execution
```
### Folder structure
- `src` - This folder contains sub folders `page` and `features`
- `page` - This sub-folder contains all page objects and related action methods 
- `features` - This sub-folder contains all feature files
- `stepdef` - This folder contains all `.spec.ts` files.
- `report` - This folder contains all generated report files.
- `wdio.config.js` - This file contains all the configuration set up of the framework
- `package.json` - This file holds all dependencies required for developement/execution
- `tsconfig.json` - This files contains TypeScript specific configuration
- `.gitignore` - This file contains folder/file that needs to be ignored for git integration

### Reports used
- `allure-reporter`
