import { ChainablePromiseElement } from 'webdriverio';
import { logStep } from "../utils/AssertionUtils";

export type WebElement = ChainablePromiseElement<WebdriverIO.Element>

export default class BasePage {

    async open(appurl: string) {
        logStep(`Opening URL: ${appurl} and maximizing window`)
        await browser.url(appurl);
        await browser.maximizeWindow();
    }

    protected async clickElement(element: WebElement) {
        await element.click();
        logStep(`Clicked on ${JSON.stringify(await element.selector)}`)
    }

    protected async setData(element: WebElement, value: string) {
        await element.setValue(value);
        logStep(`Entered '${value}' in ${JSON.stringify(await element.selector)}`)
    }

    protected async fetchText(element: WebElement) {
        const text = await element.getText();
        return text.trim();
    }

    protected async isElementDisplayed(element: WebElement) {
        logStep(`Element ${JSON.stringify(await element.selector)}is displayed: ${await element.isDisplayed()}`)
        return element.isDisplayed();
    }

    protected isElementExists(element: WebElement) {
        return element.isExisting();
    }

    async selectByAttribute(element: WebElement, attribute: string, value: string) {
        await element.selectByAttribute(attribute, value);
        logStep(`Selected value '${value}' from ${JSON.stringify(await element.selector)} dropdown`)
    }

    async selectByText(element: WebElement, text: string) {
        await element.selectByVisibleText(text);
        logStep(`Selected text '${text}' from ${JSON.stringify(await element.selector)} dropdown`)
    }
}