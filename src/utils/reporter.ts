import reporter from "@wdio/allure-reporter";

export const logStep = (log: string) => {
    reporter.addStep(`STEP || ${log}`)
    console.log(`STEP || ${log}`)
}