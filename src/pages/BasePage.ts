import { WaitEnum } from "src/enums/WaitEnums";
import WaitUtils from "utils/WaitUtils";

export default class basepage {
    open() {
        browser.maximizeWindow();
        return browser.url("");
    }

    protected doClick(element:WebdriverIO.Element, waitType:WaitEnum):void {
        WaitUtils.WaitFactory(element, waitType).click();
    }

    protected doSetValue(element:WebdriverIO.Element, value:string, waitType:WaitEnum):void {
        WaitUtils.WaitFactory(element, waitType).setValue(value);
    }
    
    protected doGetText(element:WebdriverIO.Element, waitType:WaitEnum):string {
        return WaitUtils.WaitFactory(element, waitType).getText().trim();
    }

    protected getElement(element:WebdriverIO.Element, waitType:WaitEnum):WebdriverIO.Element {
        return WaitUtils.WaitFactory(element, waitType);
    }

    protected getElements(element:WebdriverIO.ElementArray, waitType:WaitEnum):WebdriverIO.ElementArray {
        WaitUtils.WaitFactory(element[0], waitType);
        return element;
    }

    protected doIsDisplayed(element:WebdriverIO.Element, waitType:WaitEnum):boolean {
        return this.getElement(element, waitType).isDisplayed();
    }

    protected doIsExists(element:WebdriverIO.Element, waitType:WaitEnum): boolean {
        return this.getElement(element, waitType).isExisting();
    }

    doSelectByAttribute(element:WebdriverIO.Element, attribute:string, value:string, waitType:WaitEnum):void {
        this.getElement(element, waitType).selectByAttribute(attribute, value);
    }

    doSelectByVisibleText(element:WebdriverIO.Element, text:string, waitType:WaitEnum):void {
        this.getElement(element, waitType).selectByVisibleText(text);
    }
}