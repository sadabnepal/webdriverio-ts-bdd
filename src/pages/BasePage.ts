import allure from "@wdio/allure-reporter";
import { WaitEnum } from "src/enums/WaitEnums";
import WaitUtils from "utils/WaitUtils";

export default class basepage {
    open() {
        browser.maximizeWindow();
        allure.addStep(`Opening URL: ${browser.url('')} and window maximize`)
        return browser.url("");
    }

    protected getElement(element:WebdriverIO.Element, waitType:WaitEnum):WebdriverIO.Element {
        return WaitUtils.WaitFactory(element, waitType);
    }

    protected getElements(element:WebdriverIO.ElementArray, waitType:WaitEnum):WebdriverIO.ElementArray {
        WaitUtils.WaitFactory(element[0], waitType);
        return element;
    }

    protected doClick(element:WebdriverIO.Element, waitType:WaitEnum):void {
        this.getElement(element, waitType).click();
        allure.addStep(`Clicked on ${JSON.stringify(element.selector)}`)
    }

    protected doSetValue(element:WebdriverIO.Element, value:string, waitType:WaitEnum):void {
        this.getElement(element, waitType).setValue(value);
        allure.addStep(`Entered '${value}' in ${JSON.stringify(element.selector)}`)
    }
    
    protected doGetText(element:WebdriverIO.Element, waitType:WaitEnum):string {
        return WaitUtils.WaitFactory(element, waitType).getText().trim();
    }

    protected doIsDisplayed(element:WebdriverIO.Element):boolean {
        allure.addStep(`Element ${JSON.stringify(element.selector)}is displayed: ${element.isDisplayed()}`)
        return element.isDisplayed();
    }

    protected doIsExists(element:WebdriverIO.Element): boolean {
        return element.isExisting();
    }

    doSelectByAttribute(element:WebdriverIO.Element, attribute:string, value:string, waitType:WaitEnum):void {
        this.getElement(element, waitType).selectByAttribute(attribute, value);
        allure.addStep(`Selected value '${value}' from ${JSON.stringify(element.selector)} dropdown`)
    }

    doSelectByVisibleText(element:WebdriverIO.Element, text:string, waitType:WaitEnum):void {
        this.getElement(element, waitType).selectByVisibleText(text);
        allure.addStep(`Selected text '${text}' from ${JSON.stringify(element.selector)} dropdown`)
    }
}