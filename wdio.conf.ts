import allure from '@wdio/allure-reporter'
import cucumberJson from 'wdio-cucumberjs-json-reporter';
const { generate } = require('multiple-cucumber-html-reporter');
import { deleteDirectory } from './src/utils/fileutils';

export const config: WebdriverIO.Config = {
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './src/test/features/*.feature'
    ],
    exclude: [],

    suites: {
        smoke: ['./src/test/features/smoke.feature'],
        regression: ['./src/test/features/CartProduct.feature']
    },
    // ============
    // Capabilities
    // ============
    maxInstances: 2,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: [
                    '--no-sandbox',
                    '--disable-infobars',
                    '--headless',
                    '--disable-gpu',
                    '--window-size=1440,735'
                ],
            }
        }
    ],

    // ===================
    // Test Configurations
    // ===================
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    specFileRetries: 0,
    // specFileRetriesDelay: 0,
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    reporters: ['spec',
        ['allure', {
                outputDir: './reports/allure-results',
                disableWebdriverStepsReporting: true,
                useCucumberStepReporter: true
        }],
        [ 'cucumberjs-json', {
            jsonFolder: './reports/json/',
            language: 'en',
        }]
    ],
    cucumberOpts: {
        retry: 0,
        require: ['./src/test/steps/*.ts'],
        backtrace: false,
        requireModule: [],
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
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: function (config, capabilities) {
        deleteDirectory("reports");
    },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {String} cid worker id (e.g. 0-0)
     */
    // beforeSession: function (config, capabilities, specs, cid) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Cucumber Hooks
     *
     * Runs before a Cucumber Feature.
     * @param {String}                   uri      path to feature file
     * @param {GherkinDocument.IFeature} feature  Cucumber feature object
     */
    // beforeFeature: function (uri, feature) {
    // },
    /**
     *
     * Runs before a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
     * @param {Object}                 context  Cucumber World object
     */
    beforeScenario: function (world, context) {
        allure.addEnvironment("BROWSER", "Chrome");
        allure.addEnvironment("BROWSER_VERSION", "90.0.8.9");
        allure.addEnvironment("PLATFORM", "Windows");
    },
    /**
     *
     * Runs before a Cucumber Step.
     * @param {Pickle.IPickleStep} step     step data
     * @param {IPickle}            scenario scenario pickle
     * @param {Object}             context  Cucumber World object
     */
    // beforeStep: function (step, scenario, context) {
    // },
    /**
     *
     * Runs after a Cucumber Step.
     * @param {Pickle.IPickleStep} step             step data
     * @param {IPickle}            scenario         scenario pickle
     * @param {Object}             result           results object containing scenario results
     * @param {boolean}            result.passed    true if scenario has passed
     * @param {string}             result.error     error stack if scenario failed
     * @param {number}             result.duration  duration of scenario in milliseconds
     * @param {Object}             context          Cucumber World object
     */
    afterStep: async function (step, scenario, result, context) {
        if(!result.passed) {
            await browser.takeScreenshot();
            cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
        }
    },
    /**
     *
     * Runs after a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world            world object containing information on pickle and test step
     * @param {Object}                 result           results object containing scenario results
     * @param {boolean}                result.passed    true if scenario has passed
     * @param {string}                 result.error     error stack if scenario failed
     * @param {number}                 result.duration  duration of scenario in milliseconds
     * @param {Object}                 context          Cucumber World object
     */
    // afterScenario: function (world, result, context) {
    // },
    /**
     *
     * Runs after a Cucumber Feature.
     * @param {String}                   uri      path to feature file
     * @param {GherkinDocument.IFeature} feature  Cucumber feature object
     */
    // afterFeature: function (uri, feature) {
    // },
    
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    onComplete: function(exitCode, config, capabilities, results) {
        generate({
            jsonDir: './reports/json/',
            reportPath: './reports/html/',
          });
    },
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
