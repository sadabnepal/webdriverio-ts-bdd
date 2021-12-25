import { logStep } from "../utils/reporter";
import { ChainablePromiseElement } from 'webdriverio'

export default class BasePage {


    async open(appurl: string) {
        logStep(`Opening URL: ${appurl} and maximizing window`)
        await browser.url(appurl);
        await browser.maximizeWindow();
    }

    protected async clickElement(element: ChainablePromiseElement<Promise<WebdriverIO.Element>>) {
        await element.click();
        logStep(`Clicked on ${JSON.stringify(await element.selector)}`)
    }

    protected async setData(element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, value: string) {
        await element.setValue(value);
        logStep(`Entered '${value}' in ${JSON.stringify(await element.selector)}`)
    }

    protected async fetchText(element: ChainablePromiseElement<Promise<WebdriverIO.Element>>) {
        const text = await element.getText();
        return text.trim();
    }

    protected async isElementDisplayed(element: ChainablePromiseElement<Promise<WebdriverIO.Element>>) {
        logStep(`Element ${JSON.stringify(await element.selector)}is displayed: ${await element.isDisplayed()}`)
        return element.isDisplayed();
    }

    protected isElementExists(element: ChainablePromiseElement<Promise<WebdriverIO.Element>>) {
        return element.isExisting();
    }

    async selectByAttribute(element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, attribute: string, value: string) {
        await element.selectByAttribute(attribute, value);
        logStep(`Selected value '${value}' from ${JSON.stringify(await element.selector)} dropdown`)
    }

    async selectByText(element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, text: string) {
        await element.selectByVisibleText(text);
        logStep(`Selected text '${text}' from ${JSON.stringify(await element.selector)} dropdown`)
    }
}