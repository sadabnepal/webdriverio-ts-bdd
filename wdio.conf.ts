import allure from '@wdio/allure-reporter';

export const config:WebdriverIO.Config = {
    // =====================
    // Server Configurations
    // =====================
	runner: 'local',
    hostname: 'localhost',
    port: 8080,
    path: '/',
    // ====================
    // Runner Configuration
    // ====================
    specs: [
        './src/features/*.feature'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    // ============
    // Capabilities
    // ============
    maxInstances: 2,
    capabilities: [
		{
			// maxInstances: 5,
			browserName: 'chrome',
			acceptInsecureCerts: true
			// args: ['--headless', '--disable-gpu'],
		},
	 /*	{
			// maxInstances: 5,
			browserName: 'firefox',
			'moz:firefoxOptions': {
			// args: ['-headless']
			}
		}, 
	*/
	],
    // ===================
    // Test Configurations
    // ===================
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'warn',
    bail: 0,
    baseUrl: 'http://automationpractice.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: [
			['allure', 
                {
                    outputDir: './reports/allure-results',
                    disableWebdriverStepsReporting: true,
                    disableWebdriverScreenshotsReporting: false,
                    useCucumberStepReporter: true
                }
			],
			['junit', 
				{
					outputDir: './reports/junit',
					outputFileFormat: (options:any)=> {
					    return `results-${new Date().getTime()}.xml`;
					}
				}
			]
				
	],
    cucumberOpts: {
        require: ['./src/stepdef/*.spec.ts'],
        backtrace: true,
        requireModule: [
            "tsconfig-paths/register"
        ],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    // =====
    // Hooks
    // =====
    // onPrepare: function (config, capabilities) {
    // },
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    // beforeSession: function (config, capabilities, specs) {
    // },
    // before: function (capabilities, specs) {
    // },
    // beforeCommand: function (commandName, args) {
    // },
    // beforeFeature: function (uri, feature) {
    // },
    beforeScenario: function (world) {
        allure.addEnvironment("BROWSER", "Chrome");
        allure.addEnvironment("BROWSER_VERSION", "90.0.8.9");
        allure.addEnvironment("PLATFORM", "Windows");
    },
    // beforeStep: function ({ uri, feature, step }, context) {
    // },
    // afterStep: function (steps, context) {
    // },
    // afterScenario: function (uri, feature, scenario, result, sourceLocation, context) {
    // },
    // afterFeature: function (uri, feature, scenarios) {
    // },
    // afterCommand: function (commandName, args, result, error) {
    // },
    // after: function (result, capabilities, specs) {
    // },
    // afterSession: function (config, capabilities, specs) {
    // },
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
