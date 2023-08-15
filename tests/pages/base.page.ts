import { ChainablePromiseElement } from 'webdriverio';

export const logStep = (log: string) => console.log(`STEP || ${log}`)
export type WebElement = ChainablePromiseElement<WebdriverIO.Element>

export default class BasePage {

    protected async open(appUrl: string) {
        logStep(`Opening URL: ${appUrl} and maximizing window`)
        await browser.maximizeWindow();
        await browser.url(appUrl);
    }

    protected async clickElement(element: WebElement) {
        await element.click();
        logStep(`Clicked on ${await element.selector}`)
    }

    protected async setData(element: WebElement, value: string) {
        await element.setValue(value);
        logStep(`Entered '${value}' in ${await element.selector}`)
    }

}