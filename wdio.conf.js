exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
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
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
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
    reporters: [['allure', 
                {
                    outputDir: 'allure-results',
                    disableWebdriverStepsReporting: true,
                    disableWebdriverScreenshotsReporting: true,
                }]],
    cucumberOpts: {
        require: ['./src/stepdef/*.spec.ts'],
        backtrace: true,
        requireModule: [
            "tsconfig-paths/register",
            () => { require('ts-node').register({ files: true }) },
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
    // beforeFeature: function (uri, feature, scenarios) {
    // },
    // beforeScenario: function (uri, feature, scenario, sourceLocation, context) {
    // },
    // beforeStep: function ({ uri, feature, step }, context) {
    // },
    // afterStep: function ({ uri, feature, step }, context, { error, result, duration, passed, retries }) {
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
