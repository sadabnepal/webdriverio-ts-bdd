# WebdriverIOTypeScriptBDD (v7)
This is a sample Cucumber Framework that uses WebdriverIO (async mode) and TypeScript.

### Requirements
-   node >= 12.18.x - [how to install Node](https://nodejs.org/en/download/)
-   npm >= 6.14.x - [No explicit download required, it comes with node]

### Getting Started
Clone Repository
```bash
1. git clone https://github.com/sadabnepal/WebdriverIOTypeScriptBDD.git
2. Navigate to `WebdriverIOTypeScriptBDD`
```

Install the dependencies:
```bash
npm install
```

Run tests:
```bash
npm test (to run all tests)
npm run smoke (to run smoke suite)
npm run regression (to run regression suite)
```

Generate allure report:
```bash
npm run report
```

Emailable HTML Report:
```
<ROOT_PROJECT_FOLDER>reports/html/index.html
```
### Key Features
	- Cucumber BDD framework
	- Page Object Design pattern
	- Allure, Spec and Cucumber HTML report
	- Automatic test trigger using Github action

### Folder Structure
```
├───src
|   ├───constants
|   │       └───accounts.ts
│   ├───enums
|   │       └───WaitEnums.ts
|   ├───features
|   │  	    ├───smoke.feature
|   │       └───TC01_CreateAccount.feature
|   │      
|   ├───pages
|   │  	    ├───AuthenticationPage.ts
|   │	    ├───BasePage.ts
|   │	    ├───CreateAccountPage.ts
|   │	    └───HomePage.ts
|   ├───steps
|   │       └───TC01_CreateAccount.spec.feature
|   │      
|   └───testdata
|           └───SignUp.json
├───Utils
|       ├───Utilities.ts
|       ├───AssertionUtils.ts
|       └───WaitUtils.ts
├───package.json
├───README.md
├───tsconfig.json
└───wdio.conf.ts
```
### Sample Report
![image](https://user-images.githubusercontent.com/65847528/142774279-1e18cbd2-9869-4fd9-ac3b-af397022fa73.png)

