import { WaitEnum } from "../../main/enums/WaitEnums";
import WaitUtils from "../../main/utils/WaitUtils";
import { logStep } from "../utils/reporter";

export default class BasePage {
    

    open(appurl:string) {
        logStep(`Opening URL: ${appurl} and maximizing window`)
        browser.url(appurl);
        browser.maximizeWindow();
    }

    protected getElement(element:WebdriverIO.Element, waitType:WaitEnum):WebdriverIO.Element {
        return WaitUtils.WaitFactory(element, waitType);
    }

    protected getElements(element:WebdriverIO.ElementArray, waitType:WaitEnum):WebdriverIO.ElementArray {
        WaitUtils.WaitFactory(element[0], waitType);
        return element;
    }

    protected clickElement(element:WebdriverIO.Element, waitType:WaitEnum):void {
        this.getElement(element, waitType).click();
        logStep(`Clicked on ${JSON.stringify(element.selector)}`)
    }

    protected setData(element:WebdriverIO.Element, value:string, waitType:WaitEnum):void {
        this.getElement(element, waitType).setValue(value);
        logStep(`Entered '${value}' in ${JSON.stringify(element.selector)}`)
    }
    
    protected fetchText(element:WebdriverIO.Element, waitType:WaitEnum):string {
        return WaitUtils.WaitFactory(element, waitType).getText().trim();
    }

    protected isElementDisplayed(element:WebdriverIO.Element):boolean {
        logStep(`Element ${JSON.stringify(element.selector)}is displayed: ${element.isDisplayed()}`)
        return element.isDisplayed();
    }

    protected isElementExists(element:WebdriverIO.Element): boolean {
        return element.isExisting();
    }

    selectByAttribute(element:WebdriverIO.Element, attribute:string, value:string, waitType:WaitEnum):void {
        this.getElement(element, waitType).selectByAttribute(attribute, value);
        logStep(`Selected value '${value}' from ${JSON.stringify(element.selector)} dropdown`)
    }

    selectByText(element:WebdriverIO.Element, text:string, waitType:WaitEnum):void {
        this.getElement(element, waitType).selectByVisibleText(text);
        logStep(`Selected text '${text}' from ${JSON.stringify(element.selector)} dropdown`)
    }
}