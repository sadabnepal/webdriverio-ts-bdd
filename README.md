# WDIO_TypeScript_BDD
This is a sample project that uses WebdriverIO and TypeScript. This project is useful not only as an example of WebdriverIO and TypeScript playing nicely together, but it includes examples of the PageObject pattern and some practical examples for using WebdriverIO to build an automated test suite with Cucumber & Chai.

## Getting Started
```
1. git clone https://github.com/sadabnepal/WDIO_TypeScript_BDD.git
2. Navigate to `WDIO_TypeScript_BDD`
3. In the terminal, Perform "npm i" to install all the dependencies present in the package.json file.
```

## Runing a Test and Generate Report
```
1. In the terminal, perform `npm run test` to start the script execution
2. In the terminal, perform `npm run report` to generate report
```

## Runing a Test in firefox
1. Uncomment **firefox configuration** from **capabilities section** present in `wdio.conf.js` file
2. Run below command `npm run startFirefox`	in terminal and leave it open <br>
	**Note: ** *make sure you enter correct path of firefox installed in your system in package.json file*
3. Open new terminal and rub `npm run test`. Execution will start in both chrome and firefox

### Folder structure
- `src` - This folder contains sub folders `page` and `features`
- `constants` - This folder contains all contanst of different pages
- `page` - This sub-folder contains all page objects and related action methods 
- `features` - This sub-folder contains all feature files
- `stepdef` - This folder contains all `.spec.ts` files.
- `testdata` - This folder contains all `test data` to drive the test.
- `utis` - This folder contains basis utilities to reuase in different classes.
- `wdio.config.js` - This file contains all the configuration set up of the framework
- `package.json` - This file holds all dependencies required for developement/execution
- `tsconfig.json` - This files contains TypeScript specific configuration

### Reports used
- `allure-reporter`

### Sample Report
![image](https://user-images.githubusercontent.com/65847528/101646968-337b7d80-3a5e-11eb-84e7-32f52e5f278b.png)
