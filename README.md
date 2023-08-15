<h2 align="center"> Web Test Automation Framework </h2>

<h4 align="center">
	
[![CI](https://github.com/sadabnepal/WebdriverIOTypeScriptCucumber/actions/workflows/main.yml/badge.svg)](https://github.com/sadabnepal/WebdriverIOTypeScriptCucumber/actions/workflows/main.yml)

</h4>

### Requirements:
[![NodeJs](https://img.shields.io/badge/-NodeJS-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

### Getting Started
Clone Repository
```bash
1. git clone https://github.com/sadabnepal/WebdriverIOTypeScriptCucumber.git
2. Navigate to `WebdriverIOTypeScriptCucumber`
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

Emailable HTML Report:
```
<ROOT_PROJECT_FOLDER>/reports/html/index.html
```
### Key Features
	- Cucumber BDD framework
	- Page Object Design pattern
	- Spec and Cucumber HTML report
	- Demo of API calls steps within UI actions
	- Automatic test trigger using Github actions

### Folder Structure
```
├───tests
|   ├───data
|   ├───pages
|   ├───specs
|   |   ├───features
|   |   └───steps
|   ├───types
|   └───utils
├───.gitignore
├───assignment.txt
├───package-lock.json
├───package.json
├───README.md
├───tsconfig.json
└───wdio.conf.ts
```

### generate step definitions
```
npx cucumber-js ./FOLDER_PATH/filename.feature  
```
### Sample Report
![image](https://user-images.githubusercontent.com/65847528/142774279-1e18cbd2-9869-4fd9-ac3b-af397022fa73.png)

